import { Calendar, MapPin, Trophy, Users, Zap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="bg-white dark:bg-slate-900 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">MEGAZONE CLOUD</h1>
            <div className="text-sm text-muted-foreground">바이브코딩 해커톤</div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            비즈니스 리더를 위한
            <br />
            <span className="text-primary">AI Agent Hackathon</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8">
            단 2일, 당신의 아이디어가 AI 제품이 됩니다!
          </p>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-12">
            GitHub Copilot(SDK, CLI) & Microsoft AI Foundry 기반 해커톤
          </p>
        </div>

        {/* Event Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  일정
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  3월 27-28일 (2일간)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  장소
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  양재 엘타워
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  우승 혜택
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  500만원 + AirPods Pro 3
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
            왜 참여해야 하나요?
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex space-x-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <Zap className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  최신 AI 기술
                </h4>
                <p className="text-slate-600 dark:text-slate-300">
                  GitHub Copilot SDK, CLI 및 Microsoft AI Foundry를 활용한 실전 프로젝트 경험
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <Users className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  네트워킹
                </h4>
                <p className="text-slate-600 dark:text-slate-300">
                  비즈니스 리더 및 개발자들과의 협업 기회
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-slate-600 dark:text-slate-400">
            © 2026 MEGAZONE CLOUD. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
