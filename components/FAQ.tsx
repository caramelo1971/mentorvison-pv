
import React, { useState } from 'react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-cyan-400 transition-colors"
      >
        <span className="text-lg font-semibold">{question}</span>
        <svg className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-gray-400 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 px-4 bg-[#170B42] scroll-mt-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">FAQ</h2>
          <p className="text-gray-400">Tire suas dúvidas sobre o Mentor Vision</p>
        </div>
        
        <div className="space-y-2">
          {/* Fix: Using curly braces to properly escape double quotes inside a JSX string attribute */}
          <FAQItem 
            question="Como posso começar a usar o Mentor Vision?" 
            answer={"Basta você clicar no botão \"Assinar Agora e Começar\" logo acima ou no botão que vai aparecer logo após você assistir ao video introdutório de como funciona o Mentor Vision."} 
          />
          <FAQItem 
            question="A plataforma é segura para os meus dados?" 
            answer="Sim, utilizamos criptografia de ponta a ponta e servidores de alta segurança. Seus dados e os dados de seus alunos estão protegidos por rígidos protocolos de LGPD." 
          />
          <FAQItem 
            question="Posso integrar com outras ferramentas?" 
            answer="Sim, o Mentor Vision possui integração nativa com muitas plataformas tais como a Hotmart, Eduzz, Monetizze entre outras. Caso você precise integrar a uma outra plataforma, faça a solicitação que veremos em como atendê-lo." 
          />
          <FAQItem 
            question="Há suporte disponível caso eu precise de ajuda?" 
            answer="Com certeza. Contamos com um suporte especializado via chat e WhatsApp ou por e-mail." 
          />
          <FAQItem 
            question="Quais métodos de pagamento são aceitos?" 
            answer="Aceitamos cartões de crédito (todas as bandeiras), boleto bancário e PIX. As assinaturas podem ser mensais ou anuais com desconto." 
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
