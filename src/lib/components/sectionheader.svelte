<div class="section">
  <div class="filter-container">
    Level <span class="arrow"
      ><svg viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12.5 15L0 3.75L4.16863 0L12.5 7.5L20.8314 0L25 3.75L12.5 15Z"
          fill="white"
        />
      </svg>
    </span>
  </div>
</div>

<style>
  .section {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: end;
    font-family: var(--font-mono);
    border-bottom: 1px solid var(--white-20);
  }

  .filter-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .filter-container:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .arrow {
    height: 20px;
    width: 20px;
  }
</style>
