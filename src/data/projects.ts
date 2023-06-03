import { Project } from "../../typiings";

export const ProjectItems: Project[] = [
  {
    id: 1,
    slug: "product_optioning",
    image_urls: ["/assets/edison_header.png", "/assets/edison_style_sizing.png", "/assets/edison_packaging.png", "/assets/edison_origin.png"],
    title: "Product Optioning",
    short_description: `Product optioning logic for a design your own product tool`,
    description: `
    This was a purely backedn API task that was honestly a mammoth undertaking and I learned a lot while
    working on this one. The problem it was trying to solve is to dynamically update what sections of our
    Build Your Own Sock tool should be displayed or active, based on the internal characteristics of a given
    design. However, this necessitated translating the object stored in our database in "proxy" objects that
    closely resembled the originals. This was done using a Plain Old Ruby Class that would set the attributes
    needed for the front-end, format them, and pass them along. 
    
    By far the hardest part fo thsi project was taking the object as it exists in the database, and translating
    it into the proxy object. This was needed because while we wanted live reloading so the user always has a
    current preview of their design, we didn't want to persist that design to the database until it was added to
    a cart. So once the proxy object was created, it was updated instead of the original record. Then, when the
    design is added to a cart, we build a new design out of the proxy object, save it to the database, and all
    is right with the world. 
    
    During the course of thsi project, I learned so much about suing Plain RUby Classes inside of a Rails
    application, which si something I hadn't done up until this point. All the edge cases and strange
    characteristics of some of our products also agve me an opportunity to figure out the best way to handle
    inconsistent data and still format it in a consistent way so the front-end could take it and work 
    seamlessly. My team was also a giant help with this, and this project did a lot to improve communication
    between team members. Communication was paramount for this project since while I was working on the back-end,
    the front-end was being actively developed and needed to know what the data being sent back was going to
    look like at each stage of the game.`,
    techs: ["NextJS", "TailwindCSS", "Ruby on Rails"],
  },
  {
    id: 2,
    slug: "sample_requests",
    image_urls: ["/assets/samples_top.png", "/assets/samples_bottom.png"],
    title: "Sample Requests",
    short_description: `Form for users to request and add sample requests to their accounts`,
    description: `
    This project single-handedly improved my comfort with more complex forms in NextJS. This form needed to
    collect all relevant information for a user's sample request, and then send it off to the backend to create
    the record. In order to handle the validation the form needed - things like requiring a field if another
    field held a certain value, needing to select at least one of a group of options, certain options that had
    sub-topions that also had validations attached - I used react-hook-form with a custom validation schema built
    with yup. Once the user has all the options selected that they need, and the form passes validation, the
    user can hit Submit and get a sample request started! 
    
    Forms had always kinda been one of those things that were marginally scary, given how form validations 
    can spiral a bit and become a twisted mess. But I took this project as an opportunity to dive headfirst into
    and area that I wasn't super familiar with. I dove into the documentation for react-hook-form and 
    yup-resolver and successfully built my most complex form to-date! I really enjoyed this project, from the 
    styling down to the validation logic and now I'm able to take what I learned and apply it to future 
    projects as well! `,
    techs: ["NextJS", "TailwindCSS", "React-Hook-Form", "Ruby on Rails"],
  },
  {
    id: 3,
    slug: "intake_flow",
    image_urls: ["/assets/intake_styles.png", "/assets/intake_upload.png", "/assets/intake_login.png", "/assets/intake_signup_two.png"],
    title: "Intake Flow",
    short_description: `A complete re-design of one of our most client-facing features`,
    description: `
    When I took on this task, I hadn't had too many styling-focused projects for a while. I had mainly 
    been focusing on API-centric tasks. As such, I noticed I was starting to lose some of the styling
    knowledge that I had gained up until that point. That amde me want to take on this project all the more! 
    It was hard work, but I was able to take our former flow for user intakes and completely redesign it using
    TailwindCSS. The styling was based off Figma designs, adn there were certainly a lot of headaches while I 
    was working on this, but I'm really proud with the end result. Now, users of different types will have 
    their own version of our intake process in order to make the process as streamlined and easy as possible!
    
    While working on this project, I noticed that my speed with styling was coming back and I was re-learning
    that knwoledge that had become stale due to lack of practice. I'm always trying to learn and keep my 
    skills sharp, and this project was a perfect opportunity tod o just that, while also giving our users 
    a better overall experience with our products!`,
    techs: ["NextJS", "TailwindCSS"],
  },
  {
    id: 4,
    slug: "design_filter",
    image_urls: ["/assets/design_filter.png"],
    title: "Design Filter",
    short_description: `Search functionality allowing users to filter their deisngs by type or project`,
    description: `
    For this project I was tasked with allowing users to filter their designs by product type,
    and all to allow users to sarch for designs attached to a certain project. I first designed and styled
    the front-end UI based on a Figma design. The UI consists of a search input, and 4 checkboxes. 
    The element itself is a Form element built with react-hook-form and its onSUbmit handler is what 
    sends the search parameters to the API. First the search data is formatted in a way the API can ingest,
    and then we wait for results and display them  if they're present!
    
    
    The API endpoint takes the params sent from NextJS and uses them to query the database for the correct
    designs. The endpoint then formats the found designs with the data needed to display them in NextJS and sends
    them on there merry way!
    
    This project was a fun learning experience in figuring out how best to handle the database queries - 
    I knew from the start that it would be very easy to end up wtih extra queries that weren't needed, so I
    made sure to use eager loading where possible and also to look out for any N+1 issues. All in all this was
    a great project and it made our clients' user experience a lot smoother and added a feature that makes it
    easier for them to manage their business!`,
    techs: ["NextJS", "TailwindCSS"],
  },
];
