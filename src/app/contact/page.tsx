"use client";

import React, { ChangeEvent, useState } from "react";
import {
  Phone,
  Mail,
  Linkedin,
  MapPin,
  Github,
  Gitlab,
  Send,
  CheckCircle,
  XCircle
} from "lucide-react";
import { motion, Variants } from "framer-motion";

const CONTACT_INFO = {
  location : "Antananarivo, Madagascar",
  emails : ["angen3r@gmail.com", "angen1r@yahoo.fr"],
  phones : ["+261 34 12 273 14", "+261 33 94 557 10"],
  linkedin : "https://www.linkedin.com/in/nirina-angelin-razafimandimby/",
  github:"https://github.com/NirinaAngel1",
  gitlab :"https://gitlab.com/Nirina_Angel1",
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactItem = ({Icon, title, link, content, colorClass = "text-amber-400"}:{Icon : React.ElementType, title: string, link?: string, content: React.ReactNode, colorClass?: string}) => (
  <div className="flex items-start p-4 bg-gray-700/50 rounded-xl transition-all hover:bg-gray-700 border border-gray-700 hover:shadow-lg hover:border-amber-500/50 ">
    <Icon size={24} className={`${colorClass} mt-1 flex-shrink-0`}/>
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
        {link ? (
          <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-amber-400 transition-colors text-sm sm:text-base block underline-offset-4"
          >
            {content}
          </a>
        ):(
          <div className="text-gray-300 hover:text-amber-400 transition-colors text-sm sm:text-base">{content}</div>
        )}
      </div>
  </div>
);

export default function ContactPage(){
  const [formData, setFormData]= useState<FormData>({
    name:"",
    email:"",
    subject:"",
    message:"",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>("");


  // Changement dans les champs du formulaire
  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData, [name]:value
    }));
    setSubmissionStatus('idle');
    setStatusMessage("");
  };

// Soumission du formulaire
const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault();
  setIsSubmitting(true);
  setSubmissionStatus('idle');
  setStatusMessage("");

  try {
    const response = await fetch ('/api/send-email',{
      method:'POST',
      headers :{
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok){
      setSubmissionStatus('success');
      setStatusMessage("Message envoyé, je vous cotnacterai bientôt !");
      setFormData({
        name:"",
        email:"",
        subject:"",
        message:"",
      });
    }else{
      const errorData = await response.json();
      throw new Error(errorData.message || 'Erreur lors de l\'envoi du message.');
    }
  } catch(error){
    console.error("erreur de soumission", error);
    setSubmissionStatus('error');
    setStatusMessage((error as Error).message || 'Echec lors de l\'envoi, veuillez réessayer ou utiliser les coordonnées directes.');
  }finally{
    setIsSubmitting(false);
  }
};

  const containerVariants : Variants = {
    hidden:{opacity:0, y:30},
    visible:{
      opacity:1, 
      y:0, 
      transition:{staggerChildren:0.1, duration:0.5, ease:"easeOut"}},
  };

  const itemsVariants : Variants = {
    hidden:{opacity:0, y:30},
    visible:{opacity:1, y:0, transition:{duration:0.6, ease:"easeOut"}},
  };

  return (
    <motion.main
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="flex flex-col items-center min-h-screen bg-gray-900/50 text-white p-4 sm:p-8"
    >
      {/* titre et introduction */}
      <motion.div
      variants={itemsVariants}
      className="max-w-4xl w-full mb-12 text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-amber-400 mb-4 tracking-tight">Entrons en Contact</h1>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          Je suis disponible pour de nouvelles collaborations et opportunités passionnantes. Laissez-moi un message, et je vous répondrai dans les plus brefs délais.
        </p>
      </motion.div>


    {/* contenu principal de la page  */}

    <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

    {/* colonne 1 = formulaire */}
    <motion.div
    variants={itemsVariants}
    className="bg-gray-800 p-6 sm:p-10 rounded-2xl shadow-2xl border border-gray-700 h-fit"
    >
      <h2 className="text-2xl font-bold text-white mb-8 border-b border-amber-400/50 pb-3">
        Envoyez-moi un message
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* nom */}
        <div>
          <label htmlFor="name" className="block text-gray-300 text-sm font-semibold mb-2">Nom complet</label>
          <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Votre nom"
          className="w-full px-4 py-3 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-amber-500 focus:border-transparent transition-all"
          />
        </div>

        {/* mail */}
        
        <div>
          <label htmlFor="email" className="block text-gray-300 text-sm font-semibold mb-2">Email</label>
          <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Votre adresse mail"
          className="w-full px-4 py-3 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-amber-500 focus:border-transparent transition-all"
          />
        </div>

        {/* sujet ou  objet */}
        
        <div>
          <label htmlFor="subject" className="block text-gray-300 text-sm font-semibold mb-2">Sujet</label>
          <input
          type="text"
          id="namesubject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          placeholder="Sujet du message (ex: Proposition de projet)"
          className="w-full px-4 py-3 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-amber-500 focus:border-transparent transition-all"
          />
        </div>

        {/* message */}
        <div>
          <label htmlFor="message" className="block text-gray-300 text-sm font-semibold mb-2">Message</label>
          <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Décrivez votre message ici..."
          className="w-full py-3 px-4 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-y"
          ></textarea>
        </div>

        {/* statut de la soumission */}
        {submissionStatus!=='idle' && statusMessage && (
          <motion.div
          initial = {{opacity:0, height:0}}
          animate = {{opacity:1, height:"auto"}}
          className={`p-4 rounded-lg flex items-center gap-3 font-medium text-sm ${
            submissionStatus === 'success' ? 'bg-green-500/10 text-green-400 border border-green-700':
            'bg-red-500/10 text-red-400 border border-red-700'
          }`}
          >
            {submissionStatus === 'success' ? <CheckCircle size={20} /> : <XCircle size={20} />}
            {statusMessage}
          </motion.div>
        )}

        {/* Le bouton */}
        <motion.button
        whileHover={{scale:1.01}}
        whileTap={{scale:0.99}}
        type="submit"
        disabled={isSubmitting || submissionStatus === 'success'}
        className="w-full bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-3 px-4 rounded-xl focus:outline-none focus:ring-4 focus:ring-amber-500/50 transition-all flex items-center justify-center gap-2 disabled:bg-gray-500 disabled:cursor-not-allowed disabled:text-gray-200 cursor-pointer"
        >
          {/* animation lors de la soumission */}
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5 text-gray-900 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Envoi en cours...
            </>
          ):(
            <>
              Envoyer le message
              <Send size={20} />
            </>
          )}
        </motion.button>
      </form>
    </motion.div>

    {/* colonne 2 = infos de contact */}
          <motion.div 
          variants={itemsVariants} 
          className="space-y-8 h-fit lg:pt-10" // Petit padding pour alignement visuel
        >
          
          {/* Section Informations Générales */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-gray-700 pb-3">
              Coordonnées Directes
            </h2>
            <div className="space-y-4">
              
              <ContactItem
                Icon={MapPin}
                title="Localisation"
                content={CONTACT_INFO.location}
                colorClass="text-red-400"
              />
              
              <ContactItem
                Icon={Mail}
                title="Emails Personnels"
                content={
                  <div className="flex flex-col">
                    {CONTACT_INFO.emails.map((email) => (
                        <a key={email} href={`mailto:${email}`} className="hover:text-amber-400 transition-colors">
                          {email}
                        </a>
                    ))}
                  </div>
                }
                colorClass="text-blue-400"
              />

              <ContactItem
                Icon={Phone}
                title="Téléphones"
                content={
                  <div className="flex flex-col">
                    {CONTACT_INFO.phones.map((phone) => (
                      <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-amber-400 transition-colors">
                        {phone}
                      </a>
                    ))}
                  </div>
                }
                colorClass="text-green-400"
              />
            </div>
          </div>
          
          {/* Section Réseaux Sociaux */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-gray-700 pb-3">
              Réseaux Professionnels
            </h2>
            <div className="space-y-4">
              
              <ContactItem
                Icon={Linkedin}
                title="LinkedIn"
                link={CONTACT_INFO.linkedin}
                content="Profil LinkedIn"
                colorClass="text-blue-600"
              />

              <ContactItem
                Icon={Github}
                title="GitHub"
                link={CONTACT_INFO.github}
                content="Lien GitHub"
                colorClass="text-purple-400"
              />

              <ContactItem
                Icon={Gitlab}
                title="GitLab"
                link={CONTACT_INFO.gitlab}
                content="Lien GitLab"
                colorClass="text-orange-500"
              />
            </div>
          </div>
          
          {/* Bloc d'encouragement */}
          <div className="p-6 bg-amber-500/10 rounded-2xl border-l-4 border-amber-500 text-gray-300 shadow-md">
            <p className="font-semibold text-white mb-2 text-lg">Vous avez un projet web en tête ?</p>
            <p className="text-sm">Je serais ravi d&apos;en discuter avec vous ! Partagez un maximum de détails afin que je puisse vous proposer une solution adaptée à vos besoins.</p>
          </div>
        </motion.div>
    </div>


    </motion.main>
  )


}