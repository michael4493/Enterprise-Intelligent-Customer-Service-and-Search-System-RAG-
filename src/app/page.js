export default function Home() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* 區塊一：左側邊欄 (知識庫與文件上傳) */}
      <div className="w-64 bg-white border-r">
        Sidebar 預留區
      </div>

      {/* 區塊二 & 三：右側主畫面 (對話介面) */}
      <div className="flex-1 flex flex-col">
         {/* 這裡放對話紀錄 */}
         <div className="flex-1 p-4 overflow-y-auto">
            Chat UI 預留區
         </div>

         {/* 這裡放底部輸入框 */}
         <div className="p-4 border-t bg-white">
            Input Box 預留區
         </div>
      </div>
    </div>
  );
}