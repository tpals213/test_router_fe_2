import Aside from '../../components/Aside';
import React, { useState } from 'react';
import axios from 'axios';

const TestRouter = () => {

    const connect = async () => {
        const formData = {
            name: "장세민",
        };
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_FASTAPI_BASE_URL}/test/router`,
                formData
            );
            console.log(response.data.name); // ✅ 응답 본문은 `.data` 안에 들어 있음
        } catch (err) {
            console.error("저장 중 오류 발생:", err);
        }
    };


    return (
        <div>
            <div className="flex">
                <dir className="mb:hidden">
                    <Aside />
                </dir>
                <main>
                    <div>
                        <p>라우터 테스트 페이지 입니다.</p>
                    </div>
                    <div>
                        <button onClick={connect} className='border border-gray-500 px-2 py-2'>
                            fastAPI 통신
                        </button>
                    </div>
                    <div className='pt-8 '>
                        <p className='text-2xl'>1. 사용자가 질문 입력 후 답변 받기 라는 버튼 클릭 후 해당 답변 GPT 로 받아보기 </p>
                        <p>fastAPI 는 엔드포인트 - 서비스 레이어 까지 통신 </p>
                        <p>답변은 answer 라고 지정 </p>
                        <p>옆 nav 바에 gpt 대답으로 등록 - 경로는 알아서 </p>
                        <p>심화 : isLoading 으로 로딩 처리 해보기 </p>
                        <div className='py-8 border'>
                            <p>GPT 통신 방법</p>
                            <pre>
                                {`

load_dotenv()

# OpenAI API 키 설정
api_key = os.getenv("GPT_KEY")
client = OpenAI(api_key=api_key)

def generate_content(prompt):
    
    client = OpenAI(api_key=os.getenv("GPT_KEY"))
    completion = client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {"role": "user", "content": prompt},
        ],
    )
    return completion.choices[0].message.content
`}
                            </pre>


                        </div>
                    </div>
                    <div className='pt-8 '>
                        <p className='text-2xl'>2. 사용자가 숫자 입력 후 해당하는 시/도 명 가져오기 </p>
                        <p>fastAPI 는 엔드포인트 - 서비스 - crud 레이어 까지 통신 </p>
                        <p>답변은 city 라고 지정 </p>
                        <p>옆 nav 바에 시/도명 조회로 등록 - 경로는 알아서 </p>
                        <p>숫자 형태로 입력 되어야하며 숫자는 1~ 17 로 제한 </p>
                    </div>
                </main>
            </div>
        </div >
    );
}

export default TestRouter;
