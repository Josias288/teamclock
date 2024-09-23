import { Typography } from '@/ui/design/typography/typography';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

interface Props{
theme?: "black" | "white"
}


export const Clock = ({theme = "white"}:Props) => {
    const [time, setTime] = useState<string>("");

    useEffect(() => {
      const updateClock = () => {
        const currentTime = new Date();
        const hours = String(currentTime.getHours()).padStart(2, '0');
        const minutes = String(currentTime.getMinutes()).padStart(2, '0');
        const seconds = String(currentTime.getSeconds()).padStart(2, '0');
        setTime(`${hours}:${minutes}:${seconds}`);
      };
  
      const intervalId = setInterval(updateClock, 1000);
  
      updateClock();
  
      return () => clearInterval(intervalId);
    }, []);

    let themeStyles = "";
    let componentStyles = "";
    switch (theme) {
      case "black":
        themeStyles = "text-primary";
        componentStyles = "bg-gray-800";
        break;
      case "white":
        themeStyles = "text-white";
        componentStyles = "bg-primary";
        break;
    }
  
    return (
      <div className="flex items-center justify-center  w-full h-full ">
        <Typography className={clsx(themeStyles, componentStyles,"p-10 rounded ")} >{time}</Typography>
      </div>
    );
  };

