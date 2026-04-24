/* ============================================
   Gmail Clone — Mock Data
   ============================================ */

const MOCK_EMAILS = [
  {
    id: 101,
    sender: 'Placement 2k26',
    senderEmail: 'placements2k26@googlegroups.com',
    avatarLetter: 'P',
    avatarColor: 'orange',
    subject: 'Decision Tree Analytics || Recruitment Drive',
    preview: 'Dear All, We are pleased to announce th...',
    isHtml: true,
    body: `
      <div style="color: #ea4335; font-weight: 500; margin-bottom: 16px;">
        Deadline has to be strictly followed. Late registration will not be entertained.
      </div>
      <div style="font-size: 32px; font-weight: 600; color: #a8c7fa; margin-bottom: 24px;">
        Register Here
      </div>
      <div style="margin-bottom: 16px; color: #e8eaed;">
        Regards,<br>Team TPO.
      </div>
      <div style="color: #9aa0a6; font-size: 13px; line-height: 1.4;">
        --<br>
        You received this message because you are subscribed to the Google Groups "Placements 2k26" group.<br>
        To unsubscribe from this group and stop receiving emails from it, send an email to <a href="#" style="color: #a8c7fa; text-decoration: none;">placements2k26+unsubscribe@googlegroups.com</a>.<br>
        To view this discussion visit <a href="#" style="color: #a8c7fa; text-decoration: none;">https://groups.google.com/d/msgid/placements2k26/CAPy2NAzFPtBQb-LLNvPL%2Bnq10gDWKutB99gYEFm32bLCsRUCeg%40mail.gmail.com</a>.
      </div>
    `,
    time: '12 Apr',
    date: '12 Apr',
    isUnread: true,
    isStarred: false,
    category: 'primary',
    hasAttachment: true,
    attachments: [
      { type: 'pdf', name: 'HR_Campus_Hiring_Deck (1).pdf', url: './my-actual-file.pdf', size: '2MB' }
    ]
  },
  {
    id: 102,
    sender: 'Placement 2k26',
    senderEmail: 'placements2k26@googlegroups.com',
    avatarLetter: 'P',
    avatarColor: 'orange',
    subject: 'Saarthee || Recruitment Drive',
    preview: 'Dear All, PFB the list of shortlisted stude...',
    body: `Saarthee || Recruitment Drive details...`,
    time: '11 Apr',
    date: '11 Apr',
    isUnread: false,
    isStarred: true,
    category: 'primary',
    hasAttachment: true,
    attachments: [
      { type: 'excel', name: 'Saarthee OA S...', url: './my-actual-file.pdf', size: '1MB' }
    ]
  },
  {
    id: 103,
    sender: 'Placement 2k26',
    senderEmail: 'placements2k26@googlegroups.com',
    avatarLetter: 'P',
    avatarColor: 'orange',
    subject: 'Shree Cement Limited || Recruitment Drive',
    preview: 'Dear All, We are pleased to announce th...',
    body: `Shree Cement Limited || Recruitment Drive details...`,
    time: '9 Apr',
    date: '9 Apr',
    isUnread: false,
    isStarred: true,
    category: 'primary',
    hasAttachment: true,
    attachments: [
      { type: 'pdf', name: 'GET_Civil', url: '#', size: '1MB' },
      { type: 'pdf', name: 'GET_Mecha...', url: '#', size: '1MB' },
      { type: 'pdf', name: 'dummy1', url: '#', size: '1MB' },
      { type: 'pdf', name: 'dummy2', url: '#', size: '1MB' },
      { type: 'pdf', name: 'dummy3', url: '#', size: '1MB' },
      { type: 'pdf', name: 'dummy4', url: '#', size: '1MB' },
      { type: 'pdf', name: 'dummy5', url: '#', size: '1MB' }
    ]
  },
  {
    id: 104,
    sender: 'Placement 2k26',
    senderEmail: 'placements2k26@googlegroups.com',
    avatarLetter: 'P',
    avatarColor: 'orange',
    subject: 'Ekincare || Recruitment Drive',
    preview: 'Dear All, The Pre-Placement Talk[PPT] of...',
    body: `Ekincare || Recruitment Drive details...`,
    time: '9 Apr',
    date: '9 Apr',
    isUnread: false,
    isStarred: true,
    category: 'primary',
    hasAttachment: true,
    attachments: [
      { type: 'excel', name: 'Salary Break...', url: '#', size: '1MB' },
      { type: 'word', name: 'ASDE_JD_St...', url: '#', size: '1MB' },
      { type: 'pdf', name: 'dummy1', url: '#', size: '1MB' },
      { type: 'pdf', name: 'dummy2', url: '#', size: '1MB' },
      { type: 'pdf', name: 'dummy3', url: '#', size: '1MB' },
      { type: 'pdf', name: 'dummy4', url: '#', size: '1MB' }
    ]
  },
  {
    id: 1,
    sender: 'State Bank of India',
    senderEmail: 'alerts@bankofsbi.in',
    avatarLetter: 'S',
    avatarColor: 'blue',
    subject: 'Transaction with  sbi',
    preview: 'Dear Customer, Your A/c No xx 3683 debi...',
    body: `Dear Customer,

Your A/c No xx 3683 has been debited with Rs. 1500.00 on 16-Apr-2026 at POS/AMAZON. Available balance is Rs. 45,230.50.

If you have not done this transaction, please call our helpline immediately at 1800-233-4526.

Regards,
State Bank Of India
Digital Banking Department`,
    time: '3:19 pm',
    date: 'Today',
    isUnread: true,
    isStarred: false,
    category: 'primary',
    hasAttachment: false
  },
  {
    id: 2,
    sender: 'The Core',
    senderEmail: 'newsletter@thecore.in',
    avatarLetter: 'T',
    avatarColor: 'teal',
    subject: 'Biogas Targets, Missing Feedstock',
    preview: '+ Tesla tries to boost weak India sales ...',
    body: `Biogas Targets, Missing Feedstock

India's ambitious biogas targets face a critical challenge: there simply isn't enough feedstock to meet production goals. Despite the government's push to set up 5,000 compressed biogas plants by 2026, only a fraction are operational.

Tesla tries to boost weak India sales
Tesla is reportedly considering price cuts for the Indian market as initial sales figures fall below expectations. The company launched in India earlier this year with the Model 3 and Model Y.

Apple's Succession Signals
Tim Cook's recent organizational changes hint at succession planning at Apple. Key executives have been given expanded roles, suggesting the company is preparing for its next chapter of leadership.`,
    time: '8:00 am',
    date: 'Today',
    isUnread: false,
    isStarred: false,
    category: 'primary',
    hasAttachment: false
  },
  {
    id: 3,
    sender: 'LinkedIn',
    senderEmail: 'notifications@linkedin.com',
    avatarLetter: 'in',
    avatarColor: 'linkedin',
    subject: 'Complete your profile',
    preview: 'Update your job preferences to get bette...',
    body: `Hi there,

Complete your profile to get better job recommendations.

Your profile is 70% complete. Add these sections to stand out:
• Skills (add at least 5)
• Summary
• Current position details

Profiles with all sections completed receive 40x more opportunities.

Update your profile now to unlock your full potential.

- The LinkedIn Team`,
    time: '22 Apr',
    date: '22 Apr',
    isUnread: true,
    isStarred: false,
    category: 'primary',
    hasAttachment: false
  },
  {
    id: 4,
    sender: 'World Economic Forum Strate...',
    senderEmail: 'community@weforum.org',
    avatarLetter: 'W',
    avatarColor: 'orange',
    subject: 'Starting in 1 hour | Discussing Authent...',
    preview: 'Join us at 15:00 CET to learn how authen...',
    body: `Starting in 1 hour | Discussing Authenticity in the Age of AI

Dear Member,

Join us at 15:00 CET to learn how authenticity is being redefined in the age of AI-generated content.

Panel Speakers:
• Dr. Sarah Chen — MIT Media Lab
• James Morrison — Reuters Institute
• Priya Sharma — Google DeepMind

Topics we'll cover:
- The trust gap in AI-generated media
- Tools for verification and provenance
- Building authentic brands in a synthetic world

Click here to join the session.

Best regards,
WEF Strategic Intelligence Team`,
    time: '22 Apr',
    date: '22 Apr',
    isUnread: true,
    isStarred: false,
    category: 'primary',
    hasAttachment: false
  },
  {
    id: 5,
    sender: 'Netlify',
    senderEmail: 'privacy@netlify.com',
    avatarLetter: 'N',
    avatarColor: 'cyan',
    subject: "Updating Netlify's privacy statement",
    preview: "Netlify does not use customer data for A...",
    body: `Hi there,

We're writing to let you know about updates to Netlify's privacy statement, effective May 1, 2026.

Key changes:
• Netlify does not use customer data for AI model training
• Enhanced data protection measures for EU customers
• Clearer language around data retention policies
• Updated third-party sub-processor list

You can review the full updated privacy statement on our website.

Thank you for building with Netlify.

The Netlify Team`,
    time: '22 Apr',
    date: '22 Apr',
    isUnread: false,
    isStarred: false,
    category: 'primary',
    hasAttachment: false
  },
  {
    id: 6,
    sender: 'The Core',
    senderEmail: 'newsletter@thecore.in',
    avatarLetter: 'T',
    avatarColor: 'teal',
    subject: "Apple's Succession Signa...",
    preview: "+ The 'diamonds are forever' narrative is...",
    body: `Apple's Succession Signals

Tim Cook's organizational shakeup has everyone talking about who's next in line at Apple. Recent promotions suggest a clear succession strategy is forming.

The 'diamonds are forever' narrative is crumbling
Lab-grown diamonds are disrupting the natural diamond industry at an unprecedented pace. De Beers reported a 20% drop in rough diamond sales as consumers increasingly opt for sustainable alternatives.

India's EV charging infrastructure gaps
Despite ambitious targets, India's EV charging network remains patchy outside major metros. A new government initiative aims to address this with 10,000 new charging stations by 2027.`,
    time: '22 Apr',
    date: '22 Apr',
    isUnread: false,
    isStarred: false,
    category: 'primary',
    hasAttachment: false
  },
  {
    id: 7,
    sender: 'Tata 1mg',
    senderEmail: 'care@1mg.com',
    avatarLetter: 'T',
    avatarColor: 'red',
    subject: 'A note of gratitude as Tata 1mg turns 11',
    preview: 'Dear Customer, Tata 1mg completes 11 years...',
    body: `Dear Customer,

Tata 1mg completes 11 years of serving customers across India.

Over the years, everything we have built has been shaped by your trust, your feedback and your continued support. You have helped us grow, improve and stay committed to building better healthcare experiences every day.

As we reflect on this journey, we feel deeply grateful for every order you placed, every health check-up you booked, and every time you chose us for your family's well-being.

Thank you for being part of our story. Here's to many more years of good health — together.

With gratitude,
The Tata 1mg Team`,
    time: '21 Apr',
    date: '21 Apr',
    isUnread: false,
    isStarred: false,
    category: 'promotions',
    hasAttachment: false
  },
  {
    id: 8,
    sender: 'GitHub',
    senderEmail: 'noreply@github.com',
    avatarLetter: 'G',
    avatarColor: 'purple',
    subject: 'Your repository has new issues',
    preview: '3 new issues were opened in your reposit...',
    body: `Your repository has new issues

3 new issues were opened in your repository "my-project":

#142 - Bug: Login fails on Safari
Opened by @user1234

#143 - Feature: Add dark mode support
Opened by @designer_pro

#144 - Docs: Update API reference
Opened by @contributor55

View all issues on GitHub.`,
    time: '21 Apr',
    date: '21 Apr',
    isUnread: true,
    isStarred: true,
    category: 'primary',
    hasAttachment: false
  },
  {
    id: 9,
    sender: 'Spotify',
    senderEmail: 'no-reply@spotify.com',
    avatarLetter: 'S',
    avatarColor: 'green',
    subject: 'Your weekly music discovery',
    preview: 'We made a playlist just for you based on...',
    body: `Your Weekly Discovery

We made a playlist just for you based on your recent listening.

Discover Weekly — 30 songs, updated every Monday

Top picks this week:
• "Midnight City" — M83
• "Blinding Lights" — The Weeknd
• "Levitating" — Dua Lipa
• "Heat Waves" — Glass Animals

Listen now on Spotify.

Enjoy your music,
The Spotify Team`,
    time: '20 Apr',
    date: '20 Apr',
    isUnread: false,
    isStarred: false,
    category: 'promotions',
    hasAttachment: false
  },
  {
    id: 10,
    sender: 'Amazon',
    senderEmail: 'shipment-tracking@amazon.in',
    avatarLetter: 'A',
    avatarColor: 'orange',
    subject: 'Your order has been shipped!',
    preview: 'Your order #402-1234567 is on its way...',
    body: `Your order has been shipped!

Order #402-1234567-8901234
Estimated delivery: April 25, 2026

Items in this shipment:
• USB-C Hub 7-in-1 (Qty: 1)

Tracking ID: AMZN-TRK-789456123
Carrier: Amazon Logistics

Track your package for real-time updates.

Thank you for shopping with us!
Amazon.in`,
    time: '20 Apr',
    date: '20 Apr',
    isUnread: false,
    isStarred: false,
    category: 'primary',
    hasAttachment: false
  },
  {
    id: 11,
    sender: 'Figma',
    senderEmail: 'updates@figma.com',
    avatarLetter: 'F',
    avatarColor: 'purple',
    subject: "What's new in Figma — April 2026",
    preview: 'AI-powered auto layout, new plugin API...',
    body: `What's new in Figma — April 2026

We've been busy shipping features you've asked for:

AI-powered Auto Layout
Let AI suggest optimal layout configurations based on your design patterns.

New Plugin API v3
Build more powerful plugins with access to new APIs including real-time collaboration hooks.

Improved Dev Mode
Hand-off is easier than ever with inline code snippets and asset export improvements.

Try these features today in Figma.

— The Figma Team`,
    time: '19 Apr',
    date: '19 Apr',
    isUnread: false,
    isStarred: true,
    category: 'updates',
    hasAttachment: false
  },
  {
    id: 12,
    sender: 'Google',
    senderEmail: 'no-reply@accounts.google.com',
    avatarLetter: 'G',
    avatarColor: 'blue',
    subject: 'Security alert: New sign-in',
    preview: 'A new sign-in was detected on your Google...',
    body: `Security alert

A new sign-in was detected on your Google Account.

Device: Windows Desktop
Location: Mumbai, India
Time: April 19, 2026, 2:34 PM IST

If this was you, no further action is needed.

If you don't recognize this activity, please secure your account immediately.

— Google Accounts Team`,
    time: '19 Apr',
    date: '19 Apr',
    isUnread: true,
    isStarred: false,
    category: 'primary',
    hasAttachment: false
  },
  {
    id: 13,
    sender: 'Swiggy',
    senderEmail: 'offers@swiggy.in',
    avatarLetter: 'S',
    avatarColor: 'orange',
    subject: '60% OFF on your next order!',
    preview: 'Use code SWIGGY60 to get 60% off up to...',
    body: `Hungry? We've got you covered!

Use code SWIGGY60 to get 60% off up to ₹120 on your next order.

Valid until: April 30, 2026
Minimum order: ₹199

Order your favorites now:
🍕 Pizza  🍔 Burgers  🍜 Noodles  🍛 Biryani

Order now on Swiggy!

Terms & Conditions apply.`,
    time: '18 Apr',
    date: '18 Apr',
    isUnread: false,
    isStarred: false,
    category: 'promotions',
    hasAttachment: false
  },
  {
    id: 14,
    sender: 'Twitter / X',
    senderEmail: 'info@x.com',
    avatarLetter: 'X',
    avatarColor: 'indigo',
    subject: 'sk — I want to connect',
    preview: 'sk sent you a connection request...',
    body: `sk wants to connect with you on X.

"Hey! Saw your recent post about web development. Would love to connect and discuss more."

View profile and respond on X.

— X Team`,
    time: '18 Apr',
    date: '18 Apr',
    isUnread: false,
    isStarred: false,
    category: 'social',
    hasAttachment: false
  },
  {
    id: 15,
    sender: 'Vercel',
    senderEmail: 'notifications@vercel.com',
    avatarLetter: 'V',
    avatarColor: 'indigo',
    subject: 'Deployment successful',
    preview: 'Your project my-app was deployed success...',
    body: `Deployment Successful ✓

Project: my-app
Branch: main
Commit: feat: add dark mode support
Status: Ready

Production URL: https://my-app.vercel.app
Preview URL: https://my-app-git-main.vercel.app

Build Duration: 42s
Functions: 3 serverless functions deployed

— Vercel`,
    time: '17 Apr',
    date: '17 Apr',
    isUnread: false,
    isStarred: false,
    category: 'updates',
    hasAttachment: false
  },
    {
    id: 50,
    sender: "Dilip Bhardwaj",
    senderEmail: "hr@yuvabot.com",
    avatarLetter: 'D',
    avatarColor: 'orange',

    subject: "Offer Letter from Yuvabot Lab Pvt. Ltd.",
    preview: "We are pleased to offer you an opportunity at Yuvabot Lab Pvt. Ltd.",

    body: `Dear Amit,

We are pleased to inform you that you have been selected for an opportunity with Yuvabot Lab Pvt. Ltd.

After carefully reviewing your application and performance during the selection process, we are excited to offer you the position as discussed.

Your offer letter contains details regarding your role, responsibilities, compensation, and other terms of employment. Please go through the document carefully and confirm your acceptance within the given timeline.

If you have any questions or need further clarification, feel free to reach out to us.

We look forward to having you onboard and wish you a successful journey with us.

Warm regards,
Dilip Bhardwaj
HR Team
Yuvabot Lab Pvt. Ltd.`,

    time: "12 Jan",
    date: "12 Jan",

    isUnread: true,
    isStarred: false,

    category: "primary",

    hasAttachment: true,
    attachments: [
        {
            type: "pdf",
            name: "Offer_Letter.pdf",
            url: "./Offer Letter Amit Meena.pdf",
            size: "1MB"
        }
    ]
},
{
  
    id: 51,
    sender: "Dilip Bhardwaj",
    senderEmail: "hr@yuvabot.com",
    avatarLetter: 'D',
    avatarColor: 'orange',

    subject: "Your Performance Report – Yuvabot Lab Pvt. Ltd.",
    preview: "Please find your performance report for Q1 2026 attached for your review.",

    body: `
<p>Dear Amit,</p>

<p>We hope you are doing well.</p>

<p>We are pleased to share your <b>Performance Report for Q1 2026</b>. This report provides a detailed overview of your work, achievements, and areas for improvement during this period.</p>

<p>The report includes:</p>
<ul>
<li><b>Overall Performance Summary</b></li>
<li><b>Project Contributions</b></li>
<li><b>Skill Assessment</b></li>
<li><b>Areas of Improvement</b></li>
<li><b>Goals for the Next Quarter</b></li>
</ul>

<p>We encourage you to review the document carefully and connect with your reporting manager if you would like to discuss your performance in detail.</p>

<p>Please note that this report is confidential and intended solely for your reference.</p>

<p>We appreciate your hard work and contributions. Keep up the great work!</p>

<p>Warm regards,<br>
Dilip Bhardwaj<br>
HR Team<br>
Yuvabot Lab Pvt. Ltd.</p>
`,

    time: "20 Apr",
    date: "20 Apr",

    isUnread: true,
    isStarred: false,

    category: "primary",

    hasAttachment: true,
    attachments: [
        {
            type: "pdf",
            name: "Performance.pdf",
            url: "./Performance.pdf",
            size: "1MB"
        }
    ]
},

{
  id: 60,
  sender: "Amazon",
  senderEmail: "orders@amazon.in",
  avatarLetter: 'A',
  avatarColor: 'orange',
  subject: "Your order has been delivered",
  preview: "Package delivered successfully...",
  body: `Your order has been delivered successfully.

Order ID: #402-9988776
Delivered on: April 24, 2026

Thank you for shopping with Amazon.`,
  time: "24 Apr",
  date: "24 Apr",
  isUnread: true,
  isStarred: false,
  category: "primary",
  hasAttachment: false
},

{
  id: 61,
  sender: "LinkedIn",
  senderEmail: "notifications@linkedin.com",
  avatarLetter: 'in',
  avatarColor: 'linkedin',
  subject: "You appeared in 12 searches this week",
  preview: "Your profile is getting attention...",
  body: `Your profile was viewed by recruiters 12 times this week.

Update your profile to get more opportunities.`,
  time: "23 Apr",
  date: "23 Apr",
  isUnread: true,
  isStarred: false,
  category: "social",
  hasAttachment: false
},

{
  id: 62,
  sender: "Zomato",
  senderEmail: "offers@zomato.com",
  avatarLetter: 'Z',
  avatarColor: 'red',
  subject: "Flat ₹150 OFF on food 🍔",
  preview: "Use code ZOM150...",
  body: `Hungry?

Get flat ₹150 OFF on your next order using code ZOM150.`,
  time: "23 Apr",
  date: "23 Apr",
  isUnread: false,
  isStarred: false,
  category: "promotions",
  hasAttachment: false
},

{
  id: 63,
  sender: "Internshala",
  senderEmail: "no-reply@internshala.com",
  avatarLetter: 'I',
  avatarColor: 'blue',
  subject: "New internships for you",
  preview: "Apply now...",
  body: `Hi Amit,

New internships matching your skills are available.

Apply now.`,
  time: "22 Apr",
  date: "22 Apr",
  isUnread: true,
  isStarred: false,
  category: "primary",
  hasAttachment: false
},

{
  id: 64,
  sender: "GitHub",
  senderEmail: "noreply@github.com",
  avatarLetter: 'G',
  avatarColor: 'purple',
  subject: "New issue opened in your repo",
  preview: "Bug report added...",
  body: `A new issue has been opened in your repository.

Check it now on GitHub.`,
  time: "22 Apr",
  date: "22 Apr",
  isUnread: true,
  isStarred: true,
  category: "updates",
  hasAttachment: false
},

{
  id: 65,
  sender: "Swiggy",
  senderEmail: "offers@swiggy.in",
  avatarLetter: 'S',
  avatarColor: 'orange',
  subject: "50% OFF on your order 🍕",
  preview: "Limited time offer...",
  body: `Get 50% OFF using code SWIGGY50.

Order now!`,
  time: "21 Apr",
  date: "21 Apr",
  isUnread: false,
  isStarred: false,
  category: "promotions",
  hasAttachment: false
},

{
  id: 66,
  sender: "Google",
  senderEmail: "no-reply@google.com",
  avatarLetter: 'G',
  avatarColor: 'blue',
  subject: "Security alert",
  preview: "New login detected...",
  body: `A new login was detected on your account.

If not you, secure your account immediately.`,
  time: "21 Apr",
  date: "21 Apr",
  isUnread: true,
  isStarred: false,
  category: "primary",
  hasAttachment: false
},

{
  id: 67,
  sender: "Flipkart",
  senderEmail: "offers@flipkart.com",
  avatarLetter: 'F',
  avatarColor: 'blue',
  subject: "Big Saving Days is LIVE",
  preview: "Up to 80% OFF...",
  body: `Big Saving Days is live!

Grab deals before they end.`,
  time: "20 Apr",
  date: "20 Apr",
  isUnread: false,
  isStarred: false,
  category: "promotions",
  hasAttachment: false
},

{
  id: 68,
  sender: "Twitter / X",
  senderEmail: "info@x.com",
  avatarLetter: 'X',
  avatarColor: 'indigo',
  subject: "New follower request",
  preview: "Someone followed you...",
  body: `You have a new follower.

Check your profile.`,
  time: "20 Apr",
  date: "20 Apr",
  isUnread: false,
  isStarred: false,
  category: "social",
  hasAttachment: false
},

{
  id: 69,
  sender: "Paytm",
  senderEmail: "offers@paytm.com",
  avatarLetter: 'P',
  avatarColor: 'blue',
  subject: "Cashback offer available",
  preview: "Recharge now...",
  body: `Recharge and get cashback instantly.

Limited offer.`,
  time: "19 Apr",
  date: "19 Apr",
  isUnread: true,
  isStarred: false,
  category: "updates",
  hasAttachment: false
},

{
  id: 70,
  sender: "Spotify",
  senderEmail: "no-reply@spotify.com",
  avatarLetter: 'S',
  avatarColor: 'green',
  subject: "Your weekly playlist 🎧",
  preview: "New songs for you...",
  body: `Your weekly playlist is ready.

Enjoy new songs.`,
  time: "19 Apr",
  date: "19 Apr",
  isUnread: false,
  isStarred: false,
  category: "promotions",
  hasAttachment: false
},

{
  id: 71,
  sender: "Uber",
  senderEmail: "support@uber.com",
  avatarLetter: 'U',
  avatarColor: 'black',
  subject: "Your ride receipt",
  preview: "Trip completed...",
  body: `Your trip is complete.

Thank you for riding with Uber.`,
  time: "18 Apr",
  date: "18 Apr",
  isUnread: false,
  isStarred: false,
  category: "primary",
  hasAttachment: false
},

{
  id: 72,
  sender: "Vercel",
  senderEmail: "notifications@vercel.com",
  avatarLetter: 'V',
  avatarColor: 'indigo',
  subject: "Deployment successful",
  preview: "Project deployed...",
  body: `Your project has been deployed successfully.

Check live URL.`,
  time: "18 Apr",
  date: "18 Apr",
  isUnread: false,
  isStarred: false,
  category: "updates",
  hasAttachment: false
},

{
  id: 73,
  sender: "Domino's",
  senderEmail: "offers@dominos.in",
  avatarLetter: 'D',
  avatarColor: 'blue',
  subject: "Buy 1 Get 1 Free 🍕",
  preview: "Limited offer...",
  body: `Buy 1 Get 1 Free on pizzas.

Order now.`,
  time: "17 Apr",
  date: "17 Apr",
  isUnread: false,
  isStarred: false,
  category: "promotions",
  hasAttachment: false
},

{
  id: 74,
  sender: "Yuvabot Lab",
  senderEmail: "hr@yuvabot.com",
  avatarLetter: "Y",
  avatarColor: "#ea4335",
  subject: "Welcome to Yuvabot Lab",
  preview: "We are excited to have you onboard...",
  body: `Welcome to Yuvabot Lab Pvt. Ltd.

We are excited to have you onboard.

Best regards,
HR Team`,
  time: "17 Apr",
  date: "17 Apr",
  isUnread: true,
  isStarred: false,
  category: "primary",
  hasAttachment: false
}

];


const CATEGORIES = {
  // promotions: {
  //   name: 'Promotions',
  //   icon: 'promo',
  //   latestPreview: 'Jules — Help us build the next version of...',
  //   count: null
  // },
  // social: {
  //   name: 'Social',
  //   icon: 'social',
  //   latestPreview: 'sk — I want to connect',
  //   count: '1 new'
  // }
};

const NAV_ITEMS = [
  { id: 'all-inboxes', label: 'All inboxes', icon: 'allInboxes', count: null, section: 'main' },
  { id: 'primary', label: 'Primary', icon: 'inbox', count: '99+', section: 'main', active: true },
  { id: 'promotions', label: 'Promotions', icon: 'promo', count: null, section: 'main' },
  { id: 'social', label: 'Social', icon: 'social', count: '1 new', section: 'main', isNew: true },
  { id: 'updates', label: 'Updates', icon: 'updates', count: null, section: 'main' },
  { id: 'starred', label: 'Starred', icon: 'star', count: null, section: 'labels' },
  { id: 'snoozed', label: 'Snoozed', icon: 'snoozed', count: null, section: 'labels' },
  { id: 'important', label: 'Important', icon: 'important', count: '244', section: 'labels' },
  { id: 'purchases', label: 'Purchases', icon: 'purchases', count: '11', section: 'labels' },
  { id: 'sent', label: 'Sent', icon: 'sent', count: null, section: 'labels' },
  { id: 'scheduled', label: 'scheduled', icon: 'scheduled', count: null, section: 'labels' },
  { id: 'outbox', label: 'Outbox', icon: 'outbox', count: null, section: 'labels' },
  { id: 'drafts', label: 'Drafts', icon: 'drafts', count: null, section: 'labels' },
  { id: 'all-mail', label: 'All mail', icon: 'allMail', count: '99+', section: 'labels' },
  { id: 'spam', label: 'Spam', icon: 'spam', count: '18', section: 'labels' },
  { id: 'bin', label: 'Bin', icon: 'bin', count: null, section: 'labels' }
];

const RECENT_SEARCHES = [
  'chidvilas',
  'chidvilar',
  'samsung',
  'eatclub',
  'seema.ai',
  'sigma',
  'open'
];
