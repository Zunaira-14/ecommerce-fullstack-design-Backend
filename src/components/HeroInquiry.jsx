export default function HeroInquiry() {
  return (
    <div className="bg-blue-100 rounded-lg p-6 flex flex-col md:flex-row justify-between items-center gap-6 mt-8">
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-2">An easy way to send requests to all suppliers</h2>
        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
      </div>
      <div className="flex-1 w-full max-w-md">
        <input className="w-full p-2 mb-2 rounded border" placeholder="What item you need?" />
        <textarea className="w-full p-2 mb-2 rounded border" placeholder="Type more details"></textarea>
        <select className="w-full p-2 mb-2 rounded border">
          <option>Pcs</option>
          <option>Box</option>
        </select>
        <button className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700">Send Inquiry</button>
      </div>
    </div>
  );
}
