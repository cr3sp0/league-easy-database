export async function hashPassword(password : string) : Promise<string> {
    const encoder = new TextEncoder();
    
    const salt = crypto.getRandomValues(new Uint8Array(16));
    
    const keyMaterial = await crypto.subtle.importKey(
        'raw',
        encoder.encode(password),
        'PBKDF2',
        false,
        ['deriveBits', 'deriveKey']
    );

    const iterations = 100000; // Recommended minimum for SHA-256
    const derivedKey = await crypto.subtle.deriveBits(
        {
            name: 'PBKDF2',
            salt,
            iterations,
            hash: 'SHA-256'
        },
        keyMaterial,
        256
    );

    const saltHex = Buffer.from(salt).toString('hex');
    const hashHex = Buffer.from(derivedKey).toString('hex');

    return `${saltHex}:${hashHex}`;
}

export async function verifyPassword(password: string, storedHash: string): Promise<boolean> {
    const encoder = new TextEncoder();
    const [saltHex, originalHashHex] = storedHash.split(':');

    if (!saltHex || !originalHashHex) return false;

    const salt = Buffer.from(saltHex, 'hex');

    const keyMaterial = await crypto.subtle.importKey(
        'raw',
        encoder.encode(password),
        'PBKDF2',
        false,
        ['deriveBits', 'deriveKey']
    );

    const iterations = 100000;
    const derivedKey = await crypto.subtle.deriveBits(
        {
            name: 'PBKDF2',
            salt,
            iterations,
            hash: 'SHA-256'
        },
        keyMaterial,
        256
    );

    const hashHex = Buffer.from(derivedKey).toString('hex');

    return encoder.encode(hashHex) === encoder.encode(originalHashHex)

}