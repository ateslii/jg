import React from 'react';

const EmbeddedMap = ({ latitude, longitude, query }) => {
  const apiKey = 'AIzaSyADtmfaKoDbGchjLiXWRFuxo_soqOVNqH4';
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912.330295572395!2d131.8838000768215!3d43.11858717113261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fb38df7f577f259%3A0x7657442b91f7bd12!2z0J7QutC10LDQvdGB0LrQuNC5INC_0YAuLCAxM9CwLCDQktC70LDQtNC40LLQvtGB0YLQvtC6LCDQn9GA0LjQvNC-0YDRgdC60LjQuSDQutGA0LDQuSwg0KDQvtGB0YHQuNGPLCA2OTAwOTE!5e0!3m2!1sru!2suk!4v1750000581698!5m2!1sru!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`;

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <iframe
        title="Embedded Map"
        width="100%"
        height="100%"
        src={mapUrl}
        allowFullScreen
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default EmbeddedMap;
