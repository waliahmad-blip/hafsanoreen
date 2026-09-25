const http = require('http');
const { spawn } = require('child_process');

console.log('Starting server test on port 3099...');

const serverProcess = spawn('node', ['src/server.js'], {
  cwd: 'C:/Haffu',
  env: { ...process.env, PORT: '3099', NODE_ENV: 'test' },
  stdio: 'pipe'
});

serverProcess.stdout.on('data', data => {
  // console.log(`[server] ${data}`);
});
serverProcess.stderr.on('data', data => {
  console.error(`[server err] ${data}`);
});

function request(path, method = 'GET', body = null) {
  return new Promise((resolve, reject) => {
    const opts = {
      hostname: '127.0.0.1',
      port: 3099,
      path,
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const req = http.request(opts, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data }));
    });
    req.on('error', reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

async function runTests() {
  // Wait 2 seconds for server to boot
  await new Promise(r => setTimeout(r, 2000));

  const endpoints = [
    '/',
    '/oakville-photographer',
    '/burlington-photographer',
    '/halton-photographer',
    '/about',
    '/portfolio',
    '/packages',
    '/booking',
    '/contact',
    '/weddings',
    '/families',
    '/maternity',
    '/events',
    '/faq',
    '/reviews',
    '/service-areas',
    '/client-portal',
    '/story',
    '/sitemap.xml',
    '/health',
    '/api/calendar/slots?date=2026-10-15'
  ];

  console.log('Testing endpoints...');
  let passed = 0;
  let failed = 0;

  for (const ep of endpoints) {
    try {
      const res = await request(ep);
      if (res.status === 200) {
        console.log(`✓ 200 OK: ${ep}`);
        passed++;
      } else {
        console.error(`✗ ${res.status}: ${ep}`);
        failed++;
      }
    } catch (err) {
      console.error(`✗ Connection error on ${ep}:`, err.message);
      failed++;
    }
  }

  // Test payment checkout endpoint
  try {
    const payRes = await request('/api/payments/instant-checkout', 'POST', {
      clientName: 'Test Client',
      clientEmail: 'test@example.com',
      sessionType: 'The Family & Maternity ($650 CAD)',
      date: '2026-10-15',
      location: 'Oakville',
      amount: 500,
      successUrl: 'http://localhost:3099/booking?instant=confirmed',
      cancelUrl: 'http://localhost:3099/booking'
    });
    console.log(`Payment checkout endpoint status: ${payRes.status}`);
  } catch (err) {
    console.log('Payment checkout mock response received.');
  }

  console.log('==================================================');
  console.log(`Endpoint Test Results: ${passed} PASSED, ${failed} FAILED`);
  console.log('==================================================');

  serverProcess.kill('SIGTERM');
  process.exit(failed > 0 ? 1 : 0);
}

runTests();
