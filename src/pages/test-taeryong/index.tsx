import { useState } from 'react';
import CheckBox from '@/components/@shared/checkbox/CheckBox';
import Radio from '@/components/@shared/radio/Radio';

export default function TestTaeryong() {
  const [selectedRadio, setSelectedRadio] = useState('option1');
  const [selectedChecks, setSelectedChecks] = useState<string[]>([]);

  const handleCheckChange = (value: string) => {
    setSelectedChecks((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value],
    );
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="mb-4">라디오 버튼 테스트</h1>

        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2">
            <Radio
              checked={selectedRadio === 'option1'}
              onChange={() => setSelectedRadio('option1')}
            />
            <span>옵션 1</span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <Radio
              checked={selectedRadio === 'option2'}
              onChange={() => setSelectedRadio('option2')}
            />
            <span>옵션 2</span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <CheckBox
              checked={selectedChecks.includes('check1')}
              onChange={() => handleCheckChange('check1')}
            />
            <span>회색 체크박스 1</span>
          </div>
        </div>

        <div className="mt-4 mb-8">선택된 라디오: {selectedRadio}</div>

        <h1 className="mb-4">체크박스 테스트</h1>

        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2">
            <CheckBox
              checked={selectedChecks.includes('check1')}
              onChange={() => handleCheckChange('check1')}
            />
            <span>회색 체크박스 1</span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <CheckBox
              checked={selectedChecks.includes('check2')}
              onChange={() => handleCheckChange('check2')}
            />
            <span>회색 체크박스2</span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <CheckBox
              checked={selectedChecks.includes('check3')}
              variant="primary"
              onChange={() => handleCheckChange('check3')}
            />
            <span>보라색 체크박스</span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <CheckBox
              checked={selectedChecks.includes('check4')}
              disabled
              onChange={() => handleCheckChange('check4')}
            />
            <span>비활성화</span>
          </div>
        </div>

        <div className="mt-4">
          <pre className="text-left">
            선택된 체크박스: {JSON.stringify(selectedChecks, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
