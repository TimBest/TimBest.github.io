import * as React from 'react'
import SEO from '../components/seo'
import { StaticImage } from "gatsby-plugin-image"

const ComposersCouch = () => (
  <main style={{ padding: 50 }}>
    <SEO title="ComposersCouch" />
    <h2>ComposersCouch</h2>
    <p><b>January 2014 to July 2015</b></p>
    <a href="https://bitbucket.org/composersCouch/composerscouch" target="_blank" rel="noopener noreferrer"> BITBUCKET REPO</a>
    <p>
      A website dedicated to improving how concerts are booked and promoted.
      Composer's Couch provided the information and tools necessary to make educated decisions when requesting and booking shows.
    </p>
    <hr />

    <h3>Authentication</h3>
    <p>
      'Sign up' and 'Login' terminology were chosen for their distinctness.
      They differ in the number of words and the starting letter allowing for quick scanning of the website.
    </p>

    <div className="defanged1-my-gallery defanged1-flex-row-space-between">
      <figure>
        <StaticImage src="../static/composers_couch/homescreen.png" alt="homescreen" />
        <figcaption>'Sign up' and 'Login' forms are embedded into the home screen for quick access.</figcaption>
      </figure>

      <figure>
        <StaticImage src="../static/composers_couch/auth_login.png" alt="auth_login" />
        <figcaption>Users are authenticated through Facebook, Twitter or an email address and password.</figcaption>
      </figure>

      <figure>
        <StaticImage src="../static/composers_couch/auth_signup.png" alt="auth_signup" />
        <figcaption>The zipcode field auto fills based on the users IP address. Future plans were to only ask for this field when a zipcode had not been found.</figcaption>
      </figure>

      <figure>
        <StaticImage src="../static/composers_couch/auth_signup_social.png" alt="auth_signup_social" />
        <figcaption>After signing up with social authentication users are prompted for needed information.</figcaption>
      </figure>

    </div>

    <hr />

    <h3>Inbox</h3>
    <p>
      The users messages, private requests, public requests and show notifications are managed here.
      Messages could be sent internally through the site or to an email address.
      The idea was to reduce the time that it took to evaluate requests and schedule a date for them to play by providing: an integrated calendar, universally formatted press kits, and fan turn out metrics.
      Future plans included combining the rich content of filtered inbox's into one view and having one message form where public and private request are a single form instead of three forms.
    </p>
    <div className="defanged1-my-gallery defanged1-flex-row-space-between">
      <figure>
        <StaticImage src="../static/composers_couch/inbox.png" alt="inbox" />
        <figcaption>All messages can be viewed and accessed here.</figcaption>
      </figure>

      <figure>
        <StaticImage src="../static/composers_couch/inbox_sent.png" alt="inbox_sent" />
        <figcaption>Any message sent or replied to can be found here.</figcaption>
      </figure>

      <figure>
        <StaticImage src="../static/composers_couch/inbox_trash.png" alt="inbox_trash" />
        <figcaption>When deleted, threads are moved to the trash.</figcaption>
      </figure>

      <figure>
        <StaticImage src="../static/composers_couch/inbox_public_requests_sent.png" alt="inbox_public_requests_sent" />
        <figcaption>Filtering the inbox by message type allows for more detailed message views.</figcaption>
      </figure>

      <figure>
        <StaticImage src="../static/composers_couch/inbox_public_request_application.png" alt="inbox_public_request_application" />
        <figcaption>Each public request has an attached thread for responding and working out details. Future plans were to add a 'Add to Calendar' form.</figcaption>
      </figure>

      <figure>
        <StaticImage src="../static/composers_couch/inbox_private_request.png" alt="inbox_private_request" />
        <figcaption>Private request allowed for planning shows and quick porting to your calendar.</figcaption>
      </figure>

      <figure>
        <StaticImage src="../static/composers_couch/inbox_event_notification.png" alt="inbox_event_notification" />
        <figcaption>Messages are sent to all site users when they are entered as a participant in a show.</figcaption>
      </figure>

      <figure>
        <StaticImage src="../static/composers_couch/inbox_message.png" alt="inbox_message" />
        <figcaption>Regular thread contain links to all users in the message.</figcaption>
      </figure>

    </div>
    <hr />

    <h3>Calendar</h3>
    <p>
      Used to manage confirmed shows and private requests.
      Shows are exportable.
    </p>
    <div className="defanged1-my-gallery defanged1-flex-row-space-between">
      <figure>
        <StaticImage src="../static/composers_couch/calendar_month.png" alt="calendar_month" />
        <figcaption>Month view.</figcaption>
      </figure>

      <figure>
        <StaticImage src="../static/composers_couch/calendar_month_expanded.png" alt="calendar_month_expanded" />
        <figcaption>Expanded days allow for more detail on smaller screen, quick access to artist/venue search, and a create show button with the corresponding date already filled in.</figcaption>
      </figure>

      <figure>
        <StaticImage src="../static/composers_couch/calendar_year.png" alt="calendar_year" />
        <figcaption>Can view the entire year and quickly jump to a month, week, day or single event.</figcaption>
      </figure>

      <figure>
        <StaticImage src="../static/composers_couch/calendar_day.png" alt="calendar_day" />
        <figcaption>Single day view.</figcaption>
      </figure>

      <figure>
        <StaticImage src="../static/composers_couch/calendar_add_show.png" alt="calendar_add_show" />
        <figcaption>Form used to add or edit shows.</figcaption>
      </figure>

    </div>
    <hr />

    <h3>Feeds</h3>
    <p>
      By default the sites feeds are sorted by location.
      This allows for better promotion and discovery for artist and venues for they are not competing against global pop stars but rather other local acts.
    </p>
    <div className="defanged1-my-gallery defanged1-flex-row-space-between">
      <figure>
        <StaticImage src="../static/composers_couch/feeds_requests.png" alt="feeds_requests" />
        <figcaption>Public Request can be browsed by location, who they are looking for, just posted and about to expire.</figcaption>
      </figure>

      <figure>
        <StaticImage src="../static/composers_couch/feeds_requests_filter.png" alt="feeds_requests_filter" />
        <figcaption>All feeds can be filtered by a single genre group or by genres saved to your profile.</figcaption>
      </figure>

      <figure>
        <StaticImage src="../static/composers_couch/feeds_shows.png" alt="feeds_shows" />
        <figcaption>A list of shows that have been approved and made visible by all site users participating in the event.</figcaption>
      </figure>

      <figure>
        <StaticImage src="../static/composers_couch/feeds_artists.png" alt="feeds_artists" />
        <figcaption>Artists can be discovered by location and availability. Availability filtering allows traveling artist to fill in wholes in their tour. </figcaption>
      </figure>

      <figure>
        <StaticImage src="../static/composers_couch/feeds_venues.png" alt="feeds_venues" />
        <figcaption>Quickly search for a venue near you or find one that has an opening.</figcaption>
      </figure>

      <figure>
        <StaticImage src="../static/composers_couch/feeds_updates.png" alt="feeds_updates" />
        <figcaption>A way to keep up with news from local or your favorite users. Can be used to promote shows or show off content. </figcaption>
      </figure>

    </div>
    <hr />

    <h3>Artist Profile</h3>
    <p>
      The Artist Profile main functionality was to serve as a universally formatted press kit.
      Since most of the information in a press kit is also viable as a metric for discovering artists and it doubles as a promotional page.
    </p>
    <div className="defanged1-my-gallery defanged1-flex-row-space-between">
      <figure>
        <StaticImage src="../static/composers_couch/artist_about.png" alt="artist_about" />
        <figcaption></figcaption>
      </figure>

      <figure>
        <StaticImage src="../static/composers_couch/artist_news.png" alt="artist_news" />
        <figcaption>Recent stories in the news and current content the artist wants to promote.</figcaption>
      </figure>

      <figure>
        <StaticImage src="../static/composers_couch/artist_shows.png" alt="artist_shows" />
        <figcaption>All shows that the artist has made visible.</figcaption>
      </figure>

      <figure>
        <StaticImage src="../static/composers_couch/artist_music.png" alt="artist_music" />
        <figcaption>Music is currently displayed in albums/playlists. Future plan were to allow single uploads and have an artist selected top 5 songs.</figcaption>
      </figure>

      <figure>
        <StaticImage src="../static/composers_couch/artist_photos.png" alt="artist_photos" />
        <figcaption>A collection of all photos uploaded by the user.</figcaption>
      </figure>

      <figure>
        <StaticImage src="../static/composers_couch/artist_videos.png" alt="artist_videos" />
        <figcaption>Videos are stored as links to YouTube or Vimeo. They can be added individually or to tracks on an album</figcaption>
      </figure>

    </div>
    <hr />

    <h3>Venue Profile</h3>
    <p>
      This offers Artist and Fans to discover and learn about venues.
      Future plans included adding near by parking, lodging and restaurants.
    </p>
    <div className="defanged1-my-gallery defanged1-flex-row-space-between">
      <figure>
        <StaticImage src="../static/composers_couch/venue_about.png" alt="venue_about" />
        <figcaption></figcaption>
      </figure>

      <figure>
        <StaticImage src="../static/composers_couch/venue_news.png" alt="venue_news" />
        <figcaption>Recent stories in the news and current content the venue wants to promote.</figcaption>
      </figure>

      <figure>
        <StaticImage src="../static/composers_couch/venue_shows.png" alt="venue_shows" />
        <figcaption>All shows that the venue has made visible.</figcaption>
      </figure>

      <figure>
        <StaticImage src="../static/composers_couch/venue_photos.png" alt="venue_photos" />
        <figcaption>A collection of all photos uploaded by the venue</figcaption>
      </figure>

    </div>
    <hr />

    <h3>Static Pages</h3>
    <div className="defanged1-my-gallery defanged1-flex-row-space-between">
      <figure>
        <StaticImage src="../static/composers_couch/static_about.png" alt="static_about" />
        <figcaption></figcaption>
      </figure>

      <figure>
        <StaticImage src="../static/composers_couch/static_learn_more.png" alt="static_learn_more" />
        <figcaption></figcaption>
      </figure>

      <figure>
        <StaticImage src="../static/composers_couch/static_changelog.png" alt="static_changelog" />
        <figcaption></figcaption>
      </figure>

      <figure>
        <StaticImage src="../static/composers_couch/static_pipeline.png" alt="static_pipeline" />
        <figcaption></figcaption>
      </figure>

    </div>
    <hr />

    <h3>Extracted Django modules</h3>
    <p>
      List of Django models that might be use full as stand alone Django modules
    </p>
    <ul>
      <li><a href="https://github.com/TimBest/django-multi-form-view" target="_blank">Django MultiFormView</a></li>
    </ul>
  </main>
)

export default ComposersCouch
