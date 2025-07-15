export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    const userData = req.body;
    
    // Log the user data to console (visible in Vercel logs)
    console.log('');
    console.log('🎯 === NEW MAYA CHAT COMPLETION === 🎯');
    console.log('📅 Date:', userData.timestamp);
    console.log('👤 Name:', userData.name);
    console.log('🎯 Niche:', userData.niche);
    console.log('⏰ Time in Business:', userData.timeInBusiness);
    console.log('💰 Revenue:', userData.revenue);
    console.log('🚀 Main Challenge:', userData.mainChallenge);
    console.log('🔧 What They Tried:', userData.whatTriedSoFar);
    console.log('🎯 === END CHAT DATA === 🎯');
    console.log('');
    
    res.status(200).json({ success: true, message: 'Data logged successfully' });
    
  } catch (error) {
    console.error('❌ Logging Error:', error);
    res.status(500).json({ error: 'Logging failed' });
  }
}
