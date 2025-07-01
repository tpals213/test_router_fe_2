import Aside from '../../components/Aside';
import React, { useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import SectionHeader from '../../components/SectionHeader';

const TestRouter = () => {

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const connect = async () => {
        //Backend에 보낼 데이터
        const formData = {
            name: question
        }
        // console.log("질문:", question); //질문이 가고 있는가?
        setIsLoading(true); 
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_FASTAPI_BASE_URL}/test/router`,
                formData
            );
            // console.log(response.data.answer); // ✅ 응답 본문은 `.data` 안에 들어 있음
            setAnswer(response.data.answer);
        } catch (err) {
            console.error("저장 중 오류 발생:", err);
        } finally {
            setIsLoading(false);
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
                        <SectionHeader title="GPT 대답"/>
                    </section>
                    <div>
                        <textarea
                            className='border border-gray-500 w-full max-w-2xl h-40 p-2'
                            placeholder='무엇이든 물어보세요'
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            />
                    </div>
                    <div>
                        <button
                        onClick={connect}
                        disabled={isLoading}
                        className="border border-gray-500 px-2 py-2 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                        {isLoading ? (
                            <>
                            <svg
                                className="animate-spin h-5 w-5 text-gray-700"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                                />
                                <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                />
                            </svg>
                            로딩 중...
                            </>
                        ) : (
                            "물어보기"
                        )}
                        </button>
                    </div>
                    <div>
                        <h2 className='text-2xl pt-8'>GPT의 답변</h2>
                        <p className='w-full max-w-2xl'>
                            {answer ? `${answer}` : "아직 답변이 없습니다."}
                        </p>
                    </div>



                </main>
            </div>
        </div >
    );
}

export default TestRouter;
