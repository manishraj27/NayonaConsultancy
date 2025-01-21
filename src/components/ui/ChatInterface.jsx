import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import FinalLogo from '../../assets/icons/FinalLogo';

const menuVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 }
};

const ChatInterface = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I help you today?", isBot: true },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    setMessages(prev => [...prev, { id: Date.now(), text: newMessage, isBot: false }]);
    setNewMessage("");

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: "Thanks for your message! I'll get back to you soon.",
        isBot: true
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-lg w-80 mb-2"
          >
            <div className="p-4 bg-gray-100 rounded-t-2xl text-gray-800 flex justify-between items-center">
              <div>
                <span className="font-semibold text-sm">Chat with us</span>
                <p className="text-xs text-gray-500 mt-0.5">We typically reply within seconds</p>
              </div>
              <motion.button
                whileHover={{ rotate: 90 }}
                onClick={() => setIsOpen(false)}
                className="hover:bg-gray-200 p-1 rounded-full"
              >
                <X size={14} />
              </motion.button>
            </div>

            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map(message => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  {message.isBot && (
                    <div className="w-6 h-6 rounded-full mr-8 flex-shrink-0">
                      <FinalLogo />
                    </div>
                  )}

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${message.isBot
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-gray-900 text-white'
                      }`}
                  >
                    {message.text}
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <form onSubmit={handleSend} className="p-4 border-t border-gray-100">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 p-2 bg-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-gray-900 text-white p-2 rounded-xl hover:bg-gray-800 transition-colors"
                >
                  <Send size={14} />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-900 text-white p-2.5 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
      >
        <MessageCircle size={20} />
      </motion.button>
    </div>
  );
};

export default ChatInterface;