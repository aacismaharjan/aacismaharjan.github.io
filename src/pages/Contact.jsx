import React, { useState } from 'react';
import { FiArrowUpRight, FiCheck, FiCopy, FiHeart, FiMail, FiMapPin } from 'react-icons/fi';
import Section from '../components/Section';

const email = 'aashishmaharjan2001@gmail.com';

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState('');

  const copyEmail = async () => {
    setCopyStatus('');
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus('Email copied.');
    } catch {
      setCopyStatus('Please select and copy the email address above.');
    }
  };

  return (
    <Section id="contact" title="Contact">
      <div className="contact-layout">
        <div className="contact-story">
          <p className="eyebrow">An idea. A role. A new challenge.</p>
          <h3 className="contact-headline">Good work starts with <span>a conversation.</span></h3>
          <p className="contact-intro">Building a product or growing your frontend team? Tell me what you have in mind. I’d love to hear about it.</p>
          <p className="contact-location"><FiMapPin aria-hidden="true" /> Based in Kathmandu, Nepal</p>
        </div>
        <div className="contact-card">
          <div className="contact-card-heading">
            <span className="contact-mail-icon"><FiMail aria-hidden="true" /></span>
            <div><p className="eyebrow">Straight to my inbox</p><h4>Say hello</h4></div>
          </div>
          <a className="contact-email" href={`mailto:${email}`}>{email}</a>
          <a className="contact-send" href={`mailto:${email}`}><FiMail aria-hidden="true" /><span>Email me</span><FiArrowUpRight aria-hidden="true" /></a>
          <p className="contact-hint">Opens your preferred email app.</p>
          <div className="contact-copy-row">
            <span>Prefer webmail?</span>
            <button className="contact-copy" type="button" onClick={copyEmail}>
              {copyStatus === 'Email copied.' ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />} Copy email
            </button>
          </div>
          <p className="contact-status" role="status">{copyStatus}</p>
        </div>
      </div>
      <div className="contact-footer"><span>Aashish Maharjan</span><span>Built with care <FiHeart aria-hidden="true" /></span></div>
    </Section>
  );
}
