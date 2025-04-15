import { useEffect, useState } from 'react';

export default function ChatInterface() {
  const [isWebLoaderActive, setIsWebLoaderActive] = useState(true);
  
  useEffect(() => {
    // First, check if WebLoader is active by looking for its element
    const checkWebLoader = () => {
      const webLoaderElement = document.querySelector('.z-\\[9999\\]');
      setIsWebLoaderActive(!!webLoaderElement);
    };
    
    // Check immediately and set up periodic checks
    checkWebLoader();
    const intervalId = setInterval(checkWebLoader, 500);
    
    // Wait for WebLoader to finish before initializing ChatBot
    const initializeChatBot = () => {
      // Initialize ChatBot script
      window.__ow = window.__ow || {};
      window.__ow.organizationId = "dae6c953-0b6b-437f-9591-6ad165e6d26a";
      window.__ow.template_id = "ac62b9a8-823c-4944-9a0a-a888b5c42036";
      window.__ow.integration_name = "manual_settings";
      window.__ow.product_name = "chatbot";
      
      // Define and execute the ChatBot script function
      (function(n, t, c) {
        function i(n) {
          return e._h ? e._h.apply(null, n) : e._q.push(n);
        }
        var e = {
          _q: [],
          _h: null,
          _v: "2.0",
          on: function() {
            i(["on", c.call(arguments)]);
          },
          once: function() {
            i(["once", c.call(arguments)]);
          },
          off: function() {
            i(["off", c.call(arguments)]);
          },
          get: function() {
            if (!e._h) throw new Error("[OpenWidget] You can't use getters before load.");
            return i(["get", c.call(arguments)]);
          },
          call: function() {
            i(["call", c.call(arguments)]);
          },
          init: function() {
            var n = t.createElement("script");
            n.async = true;
            n.type = "text/javascript";
            n.src = "https://cdn.openwidget.com/openwidget.js";
            t.head.appendChild(n);
          }
        };
        !n.__ow.asyncInit && e.init();
        n.OpenWidget = n.OpenWidget || e;
      })(window, document, [].slice);
      
      // Set z-index and initially hide the widget
      if (window.OpenWidget) {
        window.OpenWidget.on('ready', () => {
          // Find all widget elements
          const widgetElements = document.querySelectorAll('[id^="openwidget-"]');
          widgetElements.forEach(element => {
            // Set z-index and hide initially
            element.style.zIndex = '40'; // Lower than z-50
            
            // If WebLoader is still active, hide the ChatBot
            if (isWebLoaderActive) {
              element.style.display = 'none';
            }
          });
          
          // Set up a mutation observer to watch for the removal of WebLoader
          const observer = new MutationObserver((mutations) => {
            if (!document.querySelector('.z-\\[9999\\]')) {
              // WebLoader is gone, show the ChatBot
              const widgetElements = document.querySelectorAll('[id^="openwidget-"]');
              widgetElements.forEach(element => {
                element.style.display = '';
              });
              observer.disconnect();
            }
          });
          
          observer.observe(document.body, { 
            childList: true,
            subtree: true
          });
        });
      }
    };
    
    // Initialize ChatBot after a delay to ensure WebLoader is fully active first
    const timerId = setTimeout(initializeChatBot, 2000);
    
    return () => {
      clearInterval(intervalId);
      clearTimeout(timerId);
    };
  }, [isWebLoaderActive]);

  return null; // This component doesn't render anything
}
// import { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   MessageCircle, X, Send, Paperclip,
//   FileText, Image, Video,
// } from 'lucide-react';
// import FinalLogo from '../../assets/icons/FinalLogo';

// const menuVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
//   exit: { opacity: 0, y: 10 },
// };

// const ChatInterface = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState('chat');
//   const [messages, setMessages] = useState([
//     { id: 1, text: "Hi! Welcome to Nayona Consultancy. How can we assist you today?", isBot: true },
//   ]);
//   const [newMessage, setNewMessage] = useState("");
//   const [attachments, setAttachments] = useState([]);
//   const messagesEndRef = useRef(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   useEffect(() => {
//     if (isOpen) {
//       document.body.classList.add('no-scroll');
//     } else {
//       document.body.classList.remove('no-scroll');
//     }

//     return () => {
//       document.body.classList.remove('no-scroll');
//     };
//   }, [isOpen]);

//   const handleSend = (e) => {
//     e.preventDefault();
//     if (!newMessage.trim() && attachments.length === 0) return;

//     const messagePayload = {
//       id: Date.now(),
//       text: newMessage,
//       attachments: attachments,
//       isBot: false
//     };

//     setMessages((prev) => [...prev, messagePayload]);
//     setNewMessage("");
//     setAttachments([]);

//     // Simulate bot response
//     setTimeout(() => {
//       const botResponse = {
//         id: Date.now() + 1,
//         text: "Thank you for your message. Our team is reviewing your inquiry and will respond shortly.",
//         isBot: true,
//       };
//       setMessages((prev) => [...prev, botResponse]);
//     }, 1000);
//   };

//   const handleFileUpload = (e, type) => {
//     const file = e.target.files[0];
//     if (file) {
//       const newAttachment = {
//         id: Date.now(),
//         name: file.name,
//         type: type,
//         size: file.size
//       };
//       setAttachments(prev => [...prev, newAttachment]);
//     }
//   };

//   const removeAttachment = (id) => {
//     setAttachments(prev => prev.filter(attachment => attachment.id !== id));
//   };

//   const quickReplies = [
//     { text: "Services Overview", action: () => addQuickReply("Can you provide a comprehensive overview of your services?") },
//     { text: "Consultation Booking", action: () => addQuickReply("I'd like to schedule a consultation. What are the next steps?") },
//     { text: "Case Studies", action: () => addQuickReply("Do you have any relevant case studies for my industry?") }
//   ];

//   const addQuickReply = (reply) => {
//     setMessages((prev) => [...prev, { id: Date.now(), text: reply, isBot: false }]);

//     setTimeout(() => {
//       setMessages((prev) => [
//         ...prev,
//         {
//           id: Date.now() + 1,
//           text: `Great question! Would you like to schedule a detailed discussion about this?`,
//           isBot: true,
//         },
//       ]);
//     }, 1000);
//   };

//   const renderAttachments = () => {
//     return attachments.map((attachment) => (
//       <div key={attachment.id} className="flex items-center bg-primary-100 p-2 rounded-lg mr-2 mb-2">
//         {attachment.type === 'document' && <FileText size={16} className="mr-2 text-primary-400" />}
//         {attachment.type === 'image' && <Image size={16} className="mr-2 text-primary-400" />}
//         {attachment.type === 'video' && <Video size={16} className="mr-2 text-primary-400" />}

//         <span className="text-xs truncate max-w-[120px] mr-2 text-primary-400">{attachment.name}</span>
//         <button onClick={() => removeAttachment(attachment.id)} className="text-red-500">
//           <X size={14} />
//         </button>
//       </div>
//     ));
//   };

//   return (
//     <div className="fixed bottom-16 right-1 z-40">
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             variants={menuVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="absolute bottom-12 right-0 bg-light-100 rounded-3xl shadow-2xl lg:w-[500px] mb-2 z-50 border border-gray-100/50"
//           >
//             {/* Header */}
//             <div className="p-4 bg-primary-100 rounded-t-3xl text-primary-400 flex justify-between items-center">
//               <div className="flex items-center">
//                 <FinalLogo className="w-8 h-8 mr-3" />
//                 <div>
//                   <span className="font-grotesk font-bold text-base">Nayona AI Assistant</span>
//                   <p className="font-grotesk text-xs text-primary-300 mt-0.5">Enterprise Consultation Support</p>
//                 </div>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <motion.button
//                   whileHover={{ rotate: 90 }}
//                   onClick={() => setIsOpen(false)}
//                   className="hover:bg-primary-200 p-1.5 rounded-full transition-colors"
//                 >
//                   <X size={16} className="text-primary-400" />
//                 </motion.button>
//               </div>
//             </div>

//             {/* Messages Area */}
//             <div className="lg:h-[350px] h-[250px] overflow-y-auto p-4 space-y-4 messages-area">
//               {messages.map((message) => (
//                 <motion.div
//                   key={message.id}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
//                 >
//                   {message.isBot && (
//                     <div className="w-8 h-8 rounded-full mr-2 flex-shrink-0">
//                       <FinalLogo />
//                     </div>
//                   )}

//                   <motion.div
//                     whileHover={{ scale: 1.02 }}
//                     className={`max-w-[80%] p-3 rounded-2xl ml-4 text-sm font-grotesk ${
//                       message.isBot
//                         ? "bg-primary-100 text-primary-400"
//                         : "bg-primary-400 text-light-100"
//                     }`}
//                   >
//                     {message.text}
//                     {message.attachments && message.attachments.length > 0 && (
//                       <div className="mt-2 flex flex-wrap">
//                         {message.attachments.map(attachment => (
//                           <span
//                             key={attachment.id}
//                             className="bg-primary-200 text-primary-400 text-xs px-2 py-1 rounded-full mr-1 mb-1"
//                           >
//                             {attachment.name}
//                           </span>
//                         ))}
//                       </div>
//                     )}
//                   </motion.div>
//                 </motion.div>
//               ))}
//               <div ref={messagesEndRef} />
//             </div>

//             {/* Attachments Preview */}
//             {attachments.length > 0 && (
//               <div className="px-4 pb-2 flex flex-wrap">
//                 {renderAttachments()}
//               </div>
//             )}

//             {/* Quick Replies */}
//             <div className="px-4 pb-2 flex gap-2">
//               {quickReplies.map((reply, index) => (
//                 <button
//                   key={index}
//                   onClick={reply.action}
//                   className="bg-primary-100 text-primary-400 px-3 py-1 rounded-full text-xs font-grotesk hover:bg-primary-200 transition-colors"
//                 >
//                   {reply.text}
//                 </button>
//               ))}
//             </div>

//             {/* Message Input */}
//             <div className="p-4 border-t border-gray-100/50">
//               <form onSubmit={handleSend} className="flex gap-2">
//                 <div className="flex items-center space-x-2 mr-2">
//                   <motion.label
//                     whileHover={{ scale: 1.1 }}
//                     htmlFor="document-upload"
//                     className="cursor-pointer hover:bg-primary-100 p-2 rounded-full"
//                   >
//                     <Paperclip size={16} className="text-primary-400" />
//                     <input
//                       type="file"
//                       id="document-upload"
//                       className="hidden"
//                       onChange={(e) => handleFileUpload(e, 'document')}
//                     />
//                   </motion.label>
//                 </div>

//                 <input
//                   type="text"
//                   value={newMessage}
//                   onChange={(e) => setNewMessage(e.target.value)}
//                   placeholder="Type your message..."
//                   className="flex-1 p-2 bg-primary-100 rounded-xl text-sm font-grotesk focus:outline-none focus:ring-2 focus:ring-primary-300"
//                 />

//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   type="submit"
//                   className="bg-primary-400 text-light-100 p-2 rounded-xl hover:bg-primary-300 transition-colors"
//                 >
//                   <Send size={16} />
//                 </motion.button>
//               </form>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         onClick={() => setIsOpen(!isOpen)}
//         className="bg-primary-400 text-light-100 p-2.5 rounded-full shadow-lg hover:bg-primary-300 transition-colors"
//       >
//         <MessageCircle size={20} />
//       </motion.button>
//     </div>
//   );
// };

// export default ChatInterface;