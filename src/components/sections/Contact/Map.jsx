const Map = () => {
    const mapUrl =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7495765952403!2d72.8904647!3d19.1186389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c80d150c57c1%3A0x85be5b545e23728a!2sCygnus%20Information%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1754939396997!5m2!1sen!2sin";
  
    return (
      <div className="flex flex-col gap-6">
        <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    );
  };
  
  export default Map;
  