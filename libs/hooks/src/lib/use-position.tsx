import * as React from 'react';

const usePosition = () => {
  const [position, setPosition] = React.useState<GeolocationPosition | null>(
    null
  );

  React.useEffect(() => {
    const getPosition = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => setPosition(position),
        () => setPosition(null)
      );
    };

    getPosition();
  }, []);

  return position;
};

export { usePosition };
