
export const OpenMenu = ({ activeMenu, setActiveMenu }: any) => {
  const iconOpen = (
    <svg
      onClick={() => {
        setActiveMenu(!activeMenu);
      }}
      width="137"
      height="91"
      viewBox="0 0 137 91"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="137" height="21" rx="10.5" />
      <rect x="31" y="35" width="106" height="21" rx="10.5" />
      <rect x="66" y="70" width="71" height="21" rx="10.5" />
    </svg>
  );

  const iconClose = (
    <svg
      onClick={() => {
        setActiveMenu(!activeMenu);
      }}
      width="105"
      height="116"
      viewBox="0 0 105 116"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="13.0308"
        y="3.81226"
        width="137"
        height="13.6584"
        rx="6.82919"
        transform="rotate(48.3 13.0308 3.81226)"
      />
      <rect
        x="0.288574"
        y="102.374"
        width="137"
        height="13.66"
        rx="6.83"
        transform="rotate(-48.304 0.288574 102.374)"
      />
    </svg>
  );

  return activeMenu ? iconClose : iconOpen;
};
