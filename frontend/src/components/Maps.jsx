const Maps = () => {
    const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    const address = 'University of Waterloo, Waterloo, ON, Canada';
  
    return (
      <div>
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${encodeURIComponent(address)}`}
            referrerpolicy="no-referrer-when-downgrade"
            width='100%'
            height='450'
            allowFullScreen=''
            style={{ border: 0 }}
          ></iframe>
        </div>
    );
  };
  
  export default Maps;