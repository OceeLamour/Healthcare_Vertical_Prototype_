
import React from 'react';
import { useUser } from '../../context/UserContext';
import { VERTICAL_DATA } from '../../constants';
import ActionCard from '../../components/ActionCard';

export function ForYouTab() {
  const { currentUser } = useUser();
  const content = VERTICAL_DATA[currentUser.vertical];

  if (!content) {
    return <div>Error: Vertical content not found.</div>;
  }

  return (
    <div className="space-y-6">
      <header className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-primary">
          {content.header.greeting(currentUser.name)}
        </h2>
        <p className="text-secondary mt-2">
          {content.header.subtext}
        </p>
      </header>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.cards.map((card) => (
            <ActionCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      <footer className="bg-blue-50 p-6 rounded-lg border border-blue-200">
        <h3 className="font-semibold text-blue-900 mb-2">🎯 Next Steps:</h3>
        <ol className="list-decimal list-inside space-y-1 text-sm text-blue-800">
          {content.nextSteps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </footer>
    </div>
  );
}

export default ForYouTab;