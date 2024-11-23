// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'
// import { BsGithub, BsLinkedin } from 'react-icons/bs'
// import Contact from '../Contact'

// export default function Card1Data() {
//   return (
//     <div>
//       <div className="p-[50px]">
//         <div className="content w-[700px]  m-auto">
//           <h1 className='font-bold font-sans text-[40px] '>Transform your winter blues into winter creativity</h1>
//           <br />
//           <p className='text-gray-600 font-serif'>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.

//           </p> <br />
//           <Image src="/cardimg1.webp" alt='hello' height={400} width={500} /> <br />
//           <p className='text-gray-600 font-serif'>Welcome to your blog post. Use this space to connect
//             with your readers and potential customers in a way that’s
//             current and interesting. Think of it as an ongoing conversation
//             where you can share updates about business, trends, news, and more. </p> <br />
//           <h2 className='text-[20px] font--sans font-bold'>Design with Ease
//           </h2> <br />
//           <p className='border-l-2 text-gray-600 font-serif p-[20px]' style={{ borderColor: 'rgb(187, 90, 58)' }}>    “Do you have a design in mind for your blog? Whether you prefer a trendy postcard look or you’re going for a more editorial style blog - there’s a stunning layout for everyone.”

//           </p>
//           <br />
//           <p className='text-gray-600 font-serif'>Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With Wix, building your online community has never been easier.

//           </p> <br />
//           <h3 className='text-[20px] font--sans font-bold'>Create Relevant Content</h3> <br />
//           <p className='text-gray-600 font-serif'>You’ll be posting loads of engaging content, so be sure to keep your blog organized with Categories that also allow readers to explore more of what interests them. Each category of your blog has its own page that’s fully customizable. Add a catchy title, a brief description and a beautiful image to the category page header to truly make it your own. You can also add tags (#vacation #dream #summer) throughout your posts to reach more people, and help readers search for relevant content. Using hashtags can expand your post reach and help people find the content that matters to them. Go ahead, #hashtag away.

//           </p> <br />
//           <h1 className='text-[20px] font-sans font-bold'>Stun Your Readers </h1> <br />
//           <p className='border-l-2 text-gray-600 font-serif p-[20px] ' style={{ borderColor: 'rgb(187, 90, 58)' }}>“Be original, show off your style, and tell your story.”</p> <br />

//           <p className='text-gray-600 font-serif'>
//             Blogging gives your site a voice, so let your business’ personality shine through. Are you a creative agency? Go wild with original blog posts about recent projects, cool inspirational ideas, or what your company culture is like. Add images, and videos to really spice it up, and pepper it with slang to keep readers interested. Are you a programmer? Stay on the more technical side by offering weekly tips, tricks, and hacks that show off your knowledge of the industry. No matter what type of business you have, one thing is for sure - blogging gives your business the opportunity to be heard in a way in a different and unconventional way.
//           </p> <br />
//           <h2 className='text-[20px] font--sans font-bold'>Get Inspired</h2> <br />
//           <p className='text-gray-600 font-serif'>To keep up with all things Wix, including website building tips and interesting articles, head over to the Wix Blog. You may even find yourself inspired to start crafting your own blog, adding unique content, and stunning images and videos. Start creating your own blog now. Good luck!

//           </p>
//           <br />
//           <hr /> <br />
//          <Link href="#"> <p className='text-gray-900 font-serif text-center text-[30px]'> Visit my Profile </p></Link>
//          <br /><br />


//         </div>
//       </div>
//       <Contact/>
//     </div>
//   )
// }

const Cards1Data = [
  {
    id: 'card1',
    image: '/cardimg1.webp',
    description: 'Transform Your Winter Blues into Winter Creativity',
    details: 'Winter can be a challenging season for many. The cold weather and shorter days can sometimes lead to a dip in mood and motivation. But instead of letting the winter blues get the best of you, why not transform this time into an opportunity for creative expression? This blog will explore how to use winter as a source of inspiration and turn those gloomy days into productive, creative moments.',
    heading1: 'Design with Ease',
    description2: 'Do you have a design in mind for your winter-themed blog? Whether you prefer a trendy postcard look or you are going for a more editorial style blog – there\'s a stunning layout for everyone. Winter offers endless inspiration for design. Think cozy vibes with warm, inviting colors, snowflakes, and soothing tones that create a peaceful environment for your readers.',
    description3 : 'Each blog layout can be customized to match the spirit of winter while keeping it easy to navigate. This season, embrace simplicity in your design to let your content shine. Whether you\'re creating a cozy corner for writing or showcasing your winter projects, the right design can capture the essence of winter while keeping things fresh.',
    heading2: 'Create Relevant Content',
    description4 : 'When the winter season is upon us, it\'s time to think about the kind of content you want to share. You’ll be posting loads of engaging content, so be sure to keep your blog organized with categories that allow readers to explore more of what interests them. You could focus on topics like winter crafts, cozy recipes, or personal reflections on the season. Every category of your blog can have its own page that’s fully customizable, with a catchy title and a beautiful image that immediately brings winter to life.',
    description5: 'Pro Tip: Use hashtags like #WinterVibes, #CozyCorner, or #WinterCreativity to expand your reach and help readers discover your content.',
    heading3 : 'Stun Your Readers',
    description6 : 'In winter, creativity knows no bounds. Be original, show off your style, and tell your story. Blogging gives your site a voice, so let your creativity shine through. If you\'re a creative agency, share inspiring stories about how your team embraces winter for fresh ideas. If you’re a programmer, offer tips and tricks for staying productive during the cold months. Show your readers that winter isn’t just a time for hibernation – it\'s a time for innovation.',
    description7 : 'Add images and videos that resonate with the season. Think of snowy scenes, winter landscapes, or even behind-the-scenes footage of your winter projects. No matter your niche, blogging gives your business the opportunity to be heard in a fun, personal way.',
    heading4: 'Get Inspired',
    description8: 'Staying motivated during winter can be difficult, but there are endless opportunities for inspiration. To keep up with all things creative, visit platforms like the Wix Blog, which provides tips, articles, and ideas that can help you turn winter into your most productive season yet. Don’t be afraid to get inspired by the beauty of the season. The chilly air, festive atmosphere, and warmth of indoor spaces can all spark creativity. Start crafting your own winter-inspired blog now. Explore new ideas, write unique content, and add stunning visuals to make your blog stand out.',
},

{
  id: 'card2',
  image: '/cardimg2.webp',
  description: '5 Reasons to Wake Up at 5am',
  details: 'Waking up early, especially at 5am, can transform your daily routine and boost productivity. In this blog, we\'ll explore the benefits of starting your day early and how it can help you achieve your goals, increase focus, and enhance overall well-being.',
  heading1: 'Design with Ease',
  description2: 'Have you considered designing your blog to reflect the peaceful and productive vibe of waking up early? Whether you prefer a minimalist look with fresh, calm colors or an energetic, vibrant style to match the morning hustle – you can create a design that motivates your readers to take action.',
  description3 : 'Your blog layout should not only reflect the content but also inspire your readers. Add elements like soft morning light, quiet landscapes, or even a morning cup of coffee to create a calming atmosphere. With Wix, building your online community and encouraging early risers to engage has never been easier.',
  heading2: 'Create Relevant Content',
  description4 : 'When you’re sharing tips about waking up at 5am, make sure to organize your content into categories that appeal to different aspects of morning routines. You could have categories for productivity tips, health and wellness advice, or even motivational stories of successful early risers. This will allow your readers to explore more of what interests them.',
  description5: 'Don’t forget to use relevant hashtags like #EarlyRiser, #MorningMotivation, and #5AMChallenge to help your posts reach a wider audience. These tags will not only expand your reach but also connect you with a community of like-minded individuals who are ready to embrace the power of an early start.',
  heading3 : 'Stun Your Readers',
  description6 : 'Be original and let your blog’s personality shine through. Share your personal journey of waking up at 5am, how it has transformed your life, and the benefits you’ve experienced. Readers are always looking for authentic content, so don’t hesitate to include your struggles and successes in the journey.',
  description7 : 'Are you a wellness coach? Write about the physical and mental benefits of waking up early. Are you a business coach or an entrepreneur? Share stories of how successful people like Tim Cook, Richard Branson, or Oprah Winfrey start their day at 5am. Add images, videos, and infographics to illustrate your point and make your blog visually engaging.',
  heading4: 'Get Inspired',
  description8: 'To keep up with all things related to productivity and motivation, head over to blogs and websites that focus on morning routines and successful habits. You may even find yourself inspired to craft your own blog, adding unique content that encourages your readers to wake up at 5am and seize the day. Start crafting your own blog today and embrace the power of early mornings!',
},

  {
    
      id: 'card3',
      image: '/cardimg3.webp',
      description: 'How Decluttering Changed My Life',
      details: 'In this blog, I share how decluttering my space and mind has transformed my life. From clearing physical space to reducing mental clutter, discover how simplifying my surroundings has made room for personal growth, increased productivity, and a greater sense of peace.',
      heading1: 'Design with Ease',
      description2: 'When designing your blog, consider a minimalist style that reflects the concept of decluttering. Opt for a clean layout with plenty of white space and subtle colors to create a calming atmosphere. Whether you prefer a chic, simple look or a more organized editorial design, there’s a layout for everyone that encourages clarity and focus.',
      description3 : 'Every layout comes with social sharing features to engage your audience. Readers can easily share your decluttering tips on social networks like Facebook and Twitter, helping you reach a broader audience. With Wix, building a community of people who share your passion for minimalism and simplicity has never been easier.',
      heading2: 'Create Relevant Content',
      description4 : 'As you write about decluttering, organize your content into meaningful categories that help your readers find the most relevant posts. Consider creating categories like "Decluttering Tips," "Mindfulness," and "Simplify Your Life" to guide your audience. You can also add tags like #DeclutterYourLife, #Simplify, and #Minimalism to help more people discover your posts.',
      description5: 'Using tags effectively helps you reach a wider audience and connect with people who are passionate about living a simplified, clutter-free life. By hashtagging your posts, you can expand your reach and help others find helpful content that resonates with their personal journey towards simplicity.',
      heading3 : 'Stun Your Readers',
      description6 : 'Tell your personal story and be authentic. Sharing how decluttering changed your life can inspire others to embark on their own journey of simplification. Include personal anecdotes, before-and-after photos, and even videos to capture the transformation. Your story can motivate others to declutter their own spaces and minds.',
      description7 : 'Blogging gives your site a unique voice. Whether you’re sharing decluttering tips, organizing hacks, or mindfulness practices, your personality and style should shine through. Add images of your decluttered space or any motivational quotes you live by. Are you a professional organizer? Share your expertise and helpful advice. No matter your focus, blogging allows you to share your voice in a way that resonates with your audience.',
      heading4: 'Get Inspired',
      description8: 'To keep up with all things related to decluttering and minimalism, explore other blogs and articles on simplifying life. You may find yourself inspired to start your own blog, adding unique content and valuable tips for readers who are ready to declutter their spaces and minds. Start creating your blog today and make your life—and your readers’ lives—simpler and more peaceful!',
  

  },
  
    {
      id: 'card4',
      image: '/cardimg4.webp',
      description: 'The Things We Carry, and What We Can Let Go Of',
      details: 'In this post, we’ll explore the physical, emotional, and mental baggage we carry and how letting go of unnecessary burdens can bring clarity and peace. By examining the things we hold onto, we can make space for personal growth and emotional freedom.',
      heading1: 'Design with Ease',
      description2: 'Do you have a design in mind for your blog? Whether you prefer a reflective, minimalist style or a bold editorial look, you can create a layout that conveys the theme of letting go. Use clean lines, subtle imagery, and soft colors to create a space that encourages calmness and introspection.',
      description3 : 'Every layout comes with the latest social features. Readers can easily share your content about letting go and personal growth on social platforms like Facebook and Twitter, expanding your message. With Wix, creating a blog that invites people to reflect and share has never been easier.',
      heading2 :'Create Relevant Content',
      description4 : 'Your blog will be filled with meaningful content, so it’s essential to organize it well. Categorize your posts to help readers explore what matters most to them, whether it’s topics like "Letting Go of Past Pain," "Minimalism," or "Personal Growth." Use images and concise descriptions to draw readers in, and include tags like #LetGo, #EmotionalFreedom, and #PersonalGrowth to increase your reach and connect with those on similar journeys.',
      description5 : 'Be original, share your personal experiences, and show off your style. Write about the things you’ve learned in your journey of letting go, and invite your readers to reflect on their own. Your blog can be a space where your personal voice resonates with others going through similar transformations.',
      description6 : 'Blogging is a great way to showcase your unique perspective. Are you a minimalist who’s experienced the freedom of decluttering both your home and mind? Share your story and inspire others to do the same. Add images of your transformation, share quotes, and even videos that dive deeper into how letting go has improved your life. No matter the focus, your blog will allow you to inspire others and offer valuable insights.',
      heading4: 'Get Inspired',
      description7: 'Stay inspired by exploring content related to minimalism, letting go of emotional baggage, and embracing personal freedom. Check out other blogs and articles about personal development, and find new ideas for your own blog. You may even be inspired to start creating your own content, filled with authentic stories and valuable advice. Begin your blogging journey now, and share your voice with the world!',
  },
  
    {
      id: 'card5',
      image: '/cardimg5.webp',
      description: 'When Expecting, Expect the Unexpected',
      details: 'In this post, we dive into the unpredictable nature of life, especially when you’re expecting something big. Whether it’s waiting for a new job, a life-changing event, or the unexpected joys and challenges of parenthood, things rarely go as planned. Embrace the unexpected and discover how to navigate it with grace and positivity.',
      heading1: 'Design with Ease',
      description2: 'Are you ready to design a blog that captures the unpredictability of life? Whether you prefer a whimsical, lively design or something sleek and minimalistic, choose a layout that reflects the spontaneous nature of your journey. Let your design speak to the excitement and surprise of life’s twists and turns.',
      description3 : 'With every layout, the latest social features are built in. Readers can easily share your stories about unexpected moments on social platforms like Facebook and Twitter, fostering a community of shared experiences. With Wix, creating a space where life’s surprises can be discussed and celebrated has never been easier.',
      heading2 :'Create Relevant Content',
      description4 : 'Your blog will feature tons of engaging content, from personal anecdotes to insights about embracing the unexpected. Keep your blog organized with categories such as "Life Surprises," "Expect the Unexpected," or "Embracing Change." Each category will have its own page that’s fully customizable, with a catchy title, brief description, and a stunning image. Add tags like #LifeJourney, #Surprises, #ExpectTheUnexpected to broaden your reach and help readers find content that resonates with their own experiences.',
      description5 : 'Be original, share your personal journey, and tell your story. Whether you’re sharing the ups and downs of your day-to-day life or reflections on how life’s surprises shaped you, make sure your personality shines through. Let your readers feel your genuine emotions as they connect with your experiences.',
      description6 : 'Blogging offers a unique opportunity to let your voice be heard. Share your thoughts on how you’ve learned to expect the unexpected and navigate life’s challenges. Add personal anecdotes, humor, and reflections on how you’ve grown from these experiences. Whether you’re a parent sharing the unpredictability of raising children or an entrepreneur discussing how surprises shape your career, your blog is the perfect space to express your thoughts and inspire others.',
      heading4: 'Get Inspired',
      description7: 'Looking for more ways to create meaningful content? Head over to the Wix Blog to discover tips on building your blog and finding inspiration in unexpected places. You might even find yourself inspired to start your own blog and share your unique journey with the world. Start now and let the unexpected guide your creativity!',
  },
  {
    id: 'card6',
    image: '/cardimg6.webp',
    description: 'Surprising Discoveries During Walking Tours',
    details: 'Welcome to this blog post where I share the unexpected gems I’ve stumbled upon during walking tours. Whether it’s hidden alleyways, quirky street art, or a local café off the beaten path, these walking tours have always led me to surprising discoveries. Join me as I explore the hidden treasures waiting to be found during these unforgettable walks.',
    heading1: 'Design with Ease',
    description2: 'Do you have a design in mind for your travel blog? Whether you’re aiming for a casual, travel postcard style or a sleek, magazine-like feel, there’s a perfect layout to bring your walking tour discoveries to life. Let your blog design inspire wanderlust in your readers.',
    description3: 'Each layout comes equipped with the latest social features, so readers can easily share your discoveries on social media platforms like Facebook and Twitter. With Wix, you can engage your community and share your walking tours with the world, giving your audience the chance to see the surprising spots you’ve discovered.',
    heading2: 'Create Relevant Content',
    description4: 'Share your incredible walking tour experiences in an engaging and organized way. Categories like "Hidden Gems," "Unexpected Finds," and "Off-the-Beaten-Path" will allow your readers to explore more of what interests them. Each category can be fully customized with a catchy title, a short description, and beautiful images to make the experience unforgettable. Add tags like #Wandering #StreetArt #HiddenGems to help others discover your unique posts and inspire them to take their own walking tours.',
    description5: 'Be authentic, share your journey, and capture the spirit of discovery. Whether you’re exploring a new city or rediscovering your hometown, tell the stories of the places you’ve found on your walking tours. Add vivid descriptions and images to show off the charm of unexpected discoveries.',
    description6: 'Blogging gives your site a voice, so let your love for travel and discovery shine through. Are you a travel enthusiast? Share your experiences of quirky discoveries and hidden spots you’ve found while exploring on foot. Add pictures, videos, and anecdotes that truly capture the essence of your walking tours. No matter what type of content you produce, blogging is the perfect medium to share your adventures and inspire others to explore the world around them.',
    heading4: 'Get Inspired',
    description7: 'If you’re looking for more inspiration or tips on starting your own travel blog, check out the Wix Blog for ideas on website building and creating compelling content. You might even feel motivated to share your own walking tour discoveries with the world. Start crafting your own blog today and let the unexpected discoveries lead you to new paths!',
},
{
  id: 'card7',
  image: '/cardimg7.webp',
  description: 'Join the Re-Commerce Revolution',
  details: 'Welcome to your blog post! The world of commerce is shifting, and Re-Commerce is taking the lead. This blog is your guide to understanding the growing movement of buying and selling pre-owned goods. Whether you’re a shopper or a seller, there are plenty of opportunities to be part of this eco-friendly revolution. Join the conversation and explore the future of commerce through sustainable, circular business models.',
  heading1: 'Design with Ease',
  description2: 'Do you have a design vision for your Re-Commerce blog? Whether you prefer a sleek, modern look or something more vibrant and energetic, there’s a perfect layout for your Re-Commerce story. Let your blog reflect the sustainable, innovative spirit of the circular economy.',
  description3: 'Every layout includes social features that make sharing your Re-Commerce journey easy. Readers can share posts on platforms like Facebook and Twitter, and see how others are engaging with your content. With Wix, building a community that embraces Re-Commerce has never been easier.',
  heading2: 'Create Relevant Content',
  description4: 'As a Re-Commerce blog, you’ll be sharing plenty of valuable insights. Keep your content organized with categories such as "Sustainable Shopping," "Circular Economy," and "Eco-Friendly Trends." Each category is customizable, allowing you to add a catchy title, a brief description, and an image to truly represent your brand. Use tags like #ReCommerce #Sustainability #EcoFriendly to expand your reach and help others find the content that resonates with them.',
  description5: 'Be authentic, show your passion for sustainability, and tell the story of the Re-Commerce revolution. Share tips on buying secondhand, highlight success stories, or provide a platform for sellers to share their experiences. The key is to create content that reflects the values of this growing movement.',
  description6: 'Blogging gives your Re-Commerce site a voice. Let your passion for sustainable business practices shine through. Are you a sustainable fashion advocate? Share insights on how to shop secondhand, upcycle clothes, or build a sustainable wardrobe. Add images, videos, and real-life stories to inspire your readers. No matter your niche, blogging allows you to amplify your voice and support the Re-Commerce revolution.',
  heading4: 'Get Inspired',
  description7: 'Stay inspired and continue to grow your Re-Commerce blog. Check out the Wix Blog for tips on building websites, creating engaging content, and more. You may even find yourself motivated to take the leap and start your own blog to promote sustainable shopping and the circular economy. Start your journey today and be part of the Re-Commerce revolution!',
},
{
  id: 'card8',
  image: '/cardimg8.gif',
  description: 'Starting Fresh: New Year Resolutions',
  details: 'Welcome to your blog post! New Year’s resolutions are a powerful way to set intentions for the year ahead. Whether it’s improving personal habits, achieving career goals, or fostering better relationships, the start of the year is the perfect time to embark on a fresh journey. Use this space to share tips, motivational stories, and actionable advice for those looking to start the year with a renewed sense of purpose.',
  heading1: 'Design with Ease',
  description2: 'Do you have a vision for your New Year’s resolutions blog? Whether you want a clean, minimalist layout or a more festive, vibrant style to ring in the new year, there’s a design that’ll match your message. Get your readers excited about the possibilities that come with starting fresh.',
  description3: 'Every layout comes with modern social features built-in. Readers can easily share posts on platforms like Facebook and Twitter, track engagement, and connect with others who are also setting their New Year resolutions. With Wix, creating an inspiring online space has never been easier.',
  heading2: 'Create Relevant Content',
  description4: 'You’ll be sharing loads of motivational content, so be sure to organize your posts into categories like "Personal Growth," "Fitness Goals," "Career Development," or "Mindset Shifts." Each category can have its own page, fully customizable with a catchy title, description, and beautiful image to reflect the essence of your message. Use tags such as #NewYearsResolution #GoalSetting #FreshStart to increase your post reach and help others find relevant inspiration for their own journeys.',
  heading3: 'Stun Your Readers',
  description5: 'Be authentic, share your unique resolutions, and inspire others to stay committed to their goals. Your blog is the perfect space to connect with readers and share your personal story of growth and transformation.',
  description6: 'Blogging lets you create a voice for your resolutions, so make sure your personality shines through. Whether you’re sharing tips on staying disciplined, offering advice on making resolutions stick, or showcasing success stories, make sure to add images, motivational quotes, and videos to keep readers engaged. No matter your niche, blogging lets you provide valuable content that can motivate others to make lasting changes in their lives.',
  heading4: 'Get Inspired',
  description7: 'To stay inspired and keep learning about goal-setting, time management, and personal growth, visit the Wix Blog for helpful tips and motivational articles. You may even feel inspired to create your own blog and share your personal journey toward achieving your New Year resolutions. Start crafting your blog today—good luck and happy New Year!',
},
{
  id: 'card9',
  image: '/cardimg9.webp',
  description: 'Top Street Markets in the Middle East',
  details: 'Welcome to your blog post! The Middle East is home to some of the most vibrant and culturally rich street markets in the world. From traditional souks to modern bazaars, these markets offer a unique shopping experience where you can immerse yourself in the local culture, try delicious street food, and discover handmade crafts. Use this space to share your travel experiences, market recommendations, and tips for exploring the bustling markets of the Middle East.',
  heading1: 'Design with Ease',
  description2: 'Do you have a design in mind for your travel blog? Whether you prefer a sleek, minimalistic layout to highlight stunning market visuals or a more traditional, ornate design to match the historical essence of the markets, there’s a perfect layout for your content.',
  description3: 'Every layout comes with the latest social features built in. Readers can easily share posts on social networks like Facebook and Twitter, engage with comments, and see how many people have liked your posts. With Wix, sharing your travel experiences with others has never been easier.',
  heading2: 'Create Relevant Content',
  description4: 'You’ll be sharing captivating stories and travel tips, so make sure your blog is organized by categories such as "Must-Visit Markets," "Local Street Foods," and "Cultural Finds." Each category can have its own page with a catchy title, description, and captivating images that represent the heart of each market. Add hashtags like #StreetMarkets #MiddleEastTravels #CulturalExploration to increase your post reach and help fellow travelers find your content. Hashtags are a great way to help readers discover the hidden gems of the Middle East.',
  heading3: 'Stun Your Readers',
  description5: 'Share your unique travel experiences, highlight the colorful scenes, and tell the stories behind the markets you visit. Show off your style by adding vivid images and videos to transport readers straight into the heart of the Middle East’s bustling streets.',
  description6: 'Blogging allows you to showcase your personal travel journey. Are you an adventurer exploring hidden gems? Share your authentic experiences, quirky market finds, and cultural insights with your readers. Add videos, photos, and interviews with local vendors to bring your posts to life. Whether you’re offering tips on bargaining at the souk or discovering the best street food, your blog gives you the chance to share your knowledge and passion for travel in a fun and engaging way.',
  heading4: 'Get Inspired',
  description7: 'To stay inspired and learn more about the best street markets and cultural experiences in the Middle East, visit other travel blogs and articles that offer insider tips and exciting stories. You might even feel inspired to start your own blog to share your travels, adding one-of-a-kind content, stunning imagery, and authentic videos from the streets of the Middle East. Start crafting your own blog today, and happy travels!',
}

];

export default Cards1Data;
