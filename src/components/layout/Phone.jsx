import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Phone = () => {
    const phone = useLoaderData();
 console.log(phone)
    return (
        <div>
          {phone.name}
        </div>
    );
};

export default Phone;