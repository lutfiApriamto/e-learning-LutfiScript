import React, { useEffect, useState } from "react";
import axios from 'axios'

const Score = ({setDisplay, score, setIndex, judul})=> {
    const [username, setUsername] = useState("")
    let percobaan = 0;
    const handleClick = () => {
		setDisplay('review');
		setIndex(0);
	};
    
    useEffect(() => {
        const username = localStorage.getItem("username")
        setUsername(username)
    },[])

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post("https://lutfiscript-api.vercel.app/api/auth/submitresult", {
            percobaan , username , score: score.score, quizname:judul
        })
        alert('hasil tersimpan')
        setDisplay('start')
    } catch (error) {
        alert(error)
    }
    
    }
    return (
        <>
        <div className="w-full flex flex-col gap-y-8 justify-center items-center">
            <p className="text-white font-black text-4xl sm:text-6xl">
                YOUR SCORE
            </p>
            <div className="border-4 border-yellow-300 p-8 rounded-full">
                <p className="font-bold text-7xl sm:text-9xl text-yellow-300">
                    {Math.floor(score.score)}
                </p>
            </div>
            <div className="flex w-1/2 justify-between md:w-1/3 lg:w-1/5">
                <p className="text-emerald-500 font-bold text-lg sm:text-xl">Benar : {score.true}</p>
                <p className="text-red-600 font-bold text-lg sm:text-xl">salah : {score.false}</p>
            </div>
            <div className="">
                <button 
                    onClick={handleClick}
                    className="text-white mr-5 bg-black px-4 py-2 rounded-lg hover:bg-slate-900 transition duration-300 sm:text-xl">
                        Review Answer
                </button>
                <button 
                    onClick={handleSubmit}
                    className="text-white bg-black px-4 py-2 rounded-lg hover:bg-slate-900 transition duration-300 sm:text-xl">
                        Submit results
                </button>
            </div>
        </div>
        </>
    )
}

export default Score