import Aside from '../../components/Aside';
import React, { useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import SectionHeader from '../../components/SectionHeader';

const TestCity = () => {

    const [cityNo, setCityNo] = useState("");
    const [city, setCity] = useState("");

    const connect = async () => {
        //Backend에 보낼 데이터
        const formData = {
            name: parseInt(cityNo)  // 반드시 숫자로 변환
        };
        // console.log("질문:", cityNo, "타입:", typeof formData.name); // 질문이 가고 있는가?
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_FASTAPI_BASE_URL}/city/search`,
                formData
            );
            // console.log(response.data.city); // ✅ 응답 본문은 `.data` 안에 들어 있음
            setCity(response.data.city);
        } catch (err) {
            console.error("저장 중 오류 발생:", err);
        }
    };


    return (
        <div>
            <Header />
            <div className="flex">
                <dir className="mb:hidden">
                    <Aside />
                </dir>
                <main className="flex-1 flex flex-col gap-2 min-h-screen p-4 overflow-x-hidden">
                    <section>
                        <SectionHeader title="시/도명 조회" />
                    </section>
                    <div><p>데이터베이스에서 찾아드립니다.</p></div>
                    <div className="flex items-center space-x-2 bg-gray-100 p-4 rounded-md">
                        <label className="text-m text-bold font-bold mr-8">검색</label>
                        <input
                            type="number"
                            className="p-2 border border-[#DDDDDD] "
                            value={cityNo}
                            onChange={(e) => setCityNo(e.target.value)}
                            max={17}
                            min={1}
                            />
                        <button 
                        onClick={connect} 
                        className="bg-black text-white px-4 py-2">
                            조회
                        </button>
                    </div>
                    <div>
                        <h2 className='text-2xl pt-8'>당신이 찾는 시/도는...</h2>
                        <p>
                            {city ? `${city}` : "도시 번호를 입력해주세요."}
                        </p>
                    </div>
                </main>
            </div>
        </div >
    );
}

export default TestCity;
