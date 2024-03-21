"use client"
import { useEffect, useState } from 'react';

const Preloader = () => {
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);
  return (
    loading && (
    <div id="preloader">
		<div class="loader_line"></div>
	</div>
  ))
}

export default Preloader


