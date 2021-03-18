import Geocode from 'react-geocode';

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

export const getLocation = (address) => (setSearching, setFound, setLocation) => (
  Geocode
    .fromAddress(address)
    .then((res) => {
      const { lat, lng } = res.results[0].geometry.location;
      setLocation({ lat, lng });
      setFound(true);
      setSearching(false);
    })
    .catch(() => setSearching(false))
);

export default { getLocation };
