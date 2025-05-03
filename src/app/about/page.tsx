import React from "react";

export default function About() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] bg-white py-12 px-4">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-extrabold text-green-600 mb-2 text-center">Welcome to Link Church PH</h1>
        <p className="text-xl text-green-700 font-semibold text-center mb-8">&ldquo;Connecting what Matters to God&rdquo;</p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-2">What are we?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><b>Missional Church:</b> Dedicated to reach the Spheres of Influence.</li>
            <li><b>Bible Believing Church:</b> Devoted to rightly divide the Word of Truth.</li>
            <li><b>Generational:</b> Celebrating diversity of Spiritual Gifts through Link Groups of Men and Women.</li>
            <li><b>Intentional Church:</b> In winning and discipling the people of God.</li>
            <li><b>Innovative:</b> We don&apos;t fear change.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-2">Our Church Verse</h2>
          <blockquote className="italic border-l-4 border-green-400 pl-4 text-gray-700 mb-2">
            1 Timothy 2:5-6 ESV<br />
            &quot;For there is one God, and there is one mediator between God and men, the man Christ Jesus, who gave himself as a ransom for all, which is the testimony given at the proper time.&quot;
          </blockquote>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-2">Our Vision</h2>
          <p className="mb-2"><b>God First, Disciples Made</b></p>
          <h2 className="text-2xl font-bold text-green-700 mb-2">Our Mission</h2>
          <p>
            At Link Church, our mission is to obey the Great Commission by pursuing the call to connect the lost through the gospel. We are dedicated to reach the 1% of the country&apos;s population by the help of God through the link.
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4 space-y-1">
            <li><b>L</b> - Life Changing Services</li>
            <li><b>I</b> - Influencing Spheres</li>
            <li><b>N</b> - Network Groups</li>
            <li><b>K</b> - Knowledge of the Word of God</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-2">Our Values</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>
              <b>The Word of God:</b> We desire to rightly divide the word of God, allowing believers to grow in sound doctrine.
              <br /><span className="text-sm text-gray-500">2 Timothy 2:15</span>
            </li>
            <li>
              <b>The Lordship of Jesus Christ:</b> There is one God, and one mediator, Christ Jesus.
              <br /><span className="text-sm text-gray-500">1 Timothy 2:5-6</span>
            </li>
            <li>
              <b>The Anointing of the Holy Spirit:</b> We pray for the Holy Spirit to empower believers.
              <br /><span className="text-sm text-gray-500">Acts 8:14-17</span>
            </li>
            <li>
              <b>Connection:</b> Building strong relationships within our community and beyond.
              <br /><span className="text-sm text-gray-500">Hebrews 10:24-25</span>
            </li>
            <li>
              <b>Spiritual Growth:</b> Supporting individuals and families to grow in discipleship.
              <br /><span className="text-sm text-gray-500">Matthew 28:19-20</span>
            </li>
            <li>
              <b>Service:</b> Committed to serving our community and making a positive impact.
              <br /><span className="text-sm text-gray-500">Matthew 5:13-16</span>
            </li>
            <li>
              <b>Innovation:</b> We dream big and are not limited to tradition.
              <br /><span className="text-sm text-gray-500">Psalm 119:18</span>
            </li>
            <li>
              <b>Priesthood of all Believers:</b> We are a chosen people, a royal priesthood.
              <br /><span className="text-sm text-gray-500">1 Peter 2:9</span>
            </li>
            <li>
              <b>Giving our Best:</b> We offer our best time, gifts, and resources for Kingdom work.
              <br /><span className="text-sm text-gray-500">Acts 20:35</span>
            </li>
            <li>
              <b>Unity in the Body of Christ:</b> We promote love and unity with other churches.
              <br /><span className="text-sm text-gray-500">1 Corinthians 12:12</span>
            </li>
            <li>
              <b>The Now and The Next Generation:</b> We are committed to building stronger homes and families.
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-2">What to Expect When You Visit Link Church</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>You can expect a friendly and welcoming atmosphere.</li>
            <li>
              <b>Sunday Worship Services:</b> Join us every Sunday for worship, teaching, and community.
            </li>
            <li>
              <b>Small Group Gatherings:</b> Connect with others in a more intimate setting for support and discussion.
            </li>
            <li>
              <b>Community Events:</b> Participate in events designed to foster connection and service.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-2">Get Involved</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><b>Volunteer Opportunities:</b> Share your talents and time in various ministries and outreach programs.</li>
            <li>
              <b>Join a Group:</b> Find a small group that fits your interests and schedule.{" "}
              <a href="https://forms.gle/HHZcr9Z6kcv1KnRm7" className="text-green-600 underline" target="_blank" rel="noopener noreferrer">Click here to join a Link group</a>
            </li>
            <li><b>Attend Events:</b> Participate in our community events to meet new people and deepen your connections.</li>
          </ul>
        </section>

        <p className="text-center text-green-700 font-semibold mt-8">
          Thank you for visiting Link Church. We look forward to welcoming you into our community!
        </p>
      </div>
    </main>
  );
}
