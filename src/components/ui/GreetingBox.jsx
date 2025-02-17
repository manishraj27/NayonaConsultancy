import React, { useEffect, useState } from 'react'

function GreetingBox() {
    const [timeOfDay, setTimeOfDay] = useState('');
    const [location, setLocation] = useState('Markapur, India');
  
    useEffect(() => {
      // Determine the time of day
      const getTimeOfDay = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'morning';
        if (hour < 18) return 'afternoon';
        return 'evening';
      };
  
      setTimeOfDay(getTimeOfDay());
  
      // Fetch user's location
      const fetchLocation = async () => {
        try {
          const response = await fetch('https://api.ipgeolocation.io/ipgeo?apiKey=89d342cfcbdd48d9b11a524a316b501f');
          const data = await response.json();
          setLocation(`${data.city}, ${data.country_name}`);
        } catch (error) {
          console.error('Error fetching location:', error);
        }
      };
  
      fetchLocation();
    }, []);
  
  return (
    <p className="text-gray-900 text-heading-2 lg:text-heading-3 font-grotesk font-semibold tracking-wider text-center">
          Hey there! How can we assist you<br />
          on this {timeOfDay} in <span className="h-word">{location}</span>?
        </p>
  )
}

export default GreetingBox