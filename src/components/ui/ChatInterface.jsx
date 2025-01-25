import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircle, X, Send, Paperclip,
  FileText, Image, Video,
  Sparkles
} from 'lucide-react';
import FinalLogo from '../../assets/icons/FinalLogo';

const menuVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
};

const ChatInterface = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('chat');
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! Welcome to Nayona Consultancy. How can we assist you today?", isBot: true },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [attachments, setAttachments] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!newMessage.trim() && attachments.length === 0) return;

    const messagePayload = {
      id: Date.now(),
      text: newMessage,
      attachments: attachments,
      isBot: false
    };

    setMessages((prev) => [...prev, messagePayload]);
    setNewMessage("");
    setAttachments([]);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: "Thank you for your message. Our team is reviewing your inquiry and will respond shortly.",
        isBot: true,
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  const handleFileUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const newAttachment = {
        id: Date.now(),
        name: file.name,
        type: type,
        size: file.size
      };
      setAttachments(prev => [...prev, newAttachment]);
    }
  };

  const removeAttachment = (id) => {
    setAttachments(prev => prev.filter(attachment => attachment.id !== id));
  };

  const quickReplies = [
    { text: "Services Overview", action: () => addQuickReply("Can you provide a comprehensive overview of your services?") },
    { text: "Consultation Booking", action: () => addQuickReply("I'd like to schedule a consultation. What are the next steps?") },
    { text: "Case Studies", action: () => addQuickReply("Do you have any relevant case studies for my industry?") }
  ];

  const addQuickReply = (reply) => {
    setMessages((prev) => [...prev, { id: Date.now(), text: reply, isBot: false }]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: `Great question! Would you like to schedule a detailed discussion about this?`,
          isBot: true,
        },
      ]);
    }, 1000);
  };

  const renderAttachments = () => {
    return attachments.map((attachment) => (
      <div key={attachment.id} className="flex items-center bg-gray-100 p-2 rounded-lg mr-2 mb-2">
        {attachment.type === 'document' && <FileText size={16} className="mr-2 text-gray-600" />}
        {attachment.type === 'image' && <Image size={16} className="mr-2 text-gray-600" />}
        {attachment.type === 'video' && <Video size={16} className="mr-2 text-gray-600" />}

        <span className="text-xs truncate max-w-[120px] mr-2">{attachment.name}</span>
        <button onClick={() => removeAttachment(attachment.id)} className="text-red-500">
          <X size={14} />
        </button>
      </div>
    ));
  };

  return (
    <div className="fixed bottom-16 right-4 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute bottom-12 right-0 bg-white rounded-3xl shadow-2xl lg:w-[500px] mb-2 z-50 border border-gray-100"
          >
            {/* Header */}
            <div className="p-4 bg-gray-50 rounded-t-3xl text-gray-800 flex justify-between items-center">
              <div className="flex items-center">
                <FinalLogo className="w-8 h-8 mr-3" />
                <div>
                  <span className="font-bold text-base">Nayona AI Assistant</span>
                  <p className="text-xs text-gray-500 mt-0.5">Enterprise Consultation Support</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">

                <motion.button
                  whileHover={{ rotate: 90 }}
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-gray-200 p-1.5 rounded-full"
                >
                  <X size={16} />
                </motion.button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-100">
              {['chat', 'ai'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2 text-sm transition-colors ${activeTab === tab
                      ? 'bg-gray-100 font-semibold text-gray-900'
                      : 'text-gray-500 hover:bg-gray-50'
                    }`}
                >
                  {tab === 'chat' && <MessageCircle size={16} className="inline mr-2" />}
                  {tab === 'ai' && <Sparkles size={16} className="inline mr-2" />}
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
           

            {/* Messages Area */}
            <div className="lg:h-[250px] h-[200px] overflow-y-auto p-4 space-y-4">
              {/* CHAT AREA */}
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                >
                  {message.isBot && (
                    <div className="w-8 h-8 rounded-full mr-2 flex-shrink-0">
                      <FinalLogo />
                    </div>
                  )}

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`max-w-[80%] p-3 rounded-2xl ml-4 text-sm ${message.isBot
                        ? "bg-gray-100 text-gray-800"
                        : "bg-gray-900 text-white"
                      }`}
                  >
                    {message.text}
                    {message.attachments && message.attachments.length > 0 && (
                      <div className="mt-2 flex flex-wrap">
                        {message.attachments.map(attachment => (
                          <span
                            key={attachment.id}
                            className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full mr-1 mb-1"
                          >
                            {attachment.name}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Attachments Preview */}
            {attachments.length > 0 && (
              <div className="px-4 pb-2 flex flex-wrap">
                {renderAttachments()}
              </div>
            )}

            {/* Quick Replies */}
            <div className="px-4 pb-2 flex gap-2">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={reply.action}
                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs hover:bg-gray-200 transition-colors"
                >
                  {reply.text}
                </button>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-100">
              <form onSubmit={handleSend} className="flex gap-2">
                <div className="flex items-center space-x-2 mr-2">
                  <motion.label
                    whileHover={{ scale: 1.1 }}
                    htmlFor="document-upload"
                    className="cursor-pointer hover:bg-gray-100 p-2 rounded-full"
                  >
                    <Paperclip size={16} />
                    <input
                      type="file"
                      id="document-upload"
                      className="hidden"
                      onChange={(e) => handleFileUpload(e, 'document')}
                    />
                  </motion.label>
                </div>

                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 p-2 bg-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                />

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-gray-900 text-white p-2 rounded-xl hover:bg-gray-800 transition-colors"
                >
                  <Send size={16} />
                </motion.button>
              </form>
            </div>



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