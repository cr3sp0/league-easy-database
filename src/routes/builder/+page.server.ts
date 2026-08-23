import prisma from '$lib/server/prisma'; 
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
  try {
    const champion = await prisma.campione.findFirst({
      where: {
        nome: 'Fanto',
      },
    });
    
    return {
      profile: cookies.get('ledb_session'),
      champion
    };
  } catch (errore: any) {
    console.log("ERRORE:", errore.message);
    return { champion: null };
  }
};