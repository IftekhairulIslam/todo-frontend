import TodoContainer from './components/TodoContainer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            📝 Todo App
          </h1>
          <TodoContainer />
        </div>
      </div>
    </div>
  );
}
