import { useState, useEffect } from 'react';

function App() {
	const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime((prevTime) => {
				const newSeconds = (prevTime.seconds + 1) % 60;
				const newMinutes = (prevTime.minutes + Math.floor((prevTime.seconds + 1) / 60)) % 60;
				const newHours = (prevTime.hours + Math.floor((prevTime.minutes + 1) / 60)) % 12;

				return { hours: newHours, minutes: newMinutes, seconds: newSeconds };
			});
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);

	const getRotationStyle = (degrees) => ({
		transform: `rotate(${degrees + 180}deg)`,
		transformOrigin: 'bottom center',
	});

	return (
		<div className="w-screen h-screen flex justify-center items-center bg-slate-200">
			<div className="w-64 h-64 bg-slate-100 text-white rounded-full border-8 border-white relative">
				{/* Your existing code for the rotating lines */}
				<div className='w-[1px] h-[1px] transform absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' style={getRotationStyle(time.seconds * 6)}>
					<div className="w-[3px] rounded h-20 bg-black rotate-[180]"></div>
				</div>
				<div className='w-[1px] h-[1px] transform absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' style={getRotationStyle(time.minutes * 6)}>
					<div className="w-[3px] rounded h-20 bg-black rotate-[180]"></div>
				</div>
				<div className='w-[1px] h-[1px] transform absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' style={getRotationStyle((time.hours % 12) * 30)}>
					<div className="w-[3px] rounded h-20 bg-black rotate-[180]"></div>
				</div>
			</div>
		</div>
	);
}

export default App;
