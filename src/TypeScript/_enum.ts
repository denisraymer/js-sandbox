// В enum следующая константа отталкивается от значения предыдущей.
// Поэтому Backend = 50, а Designer будет равен 51
enum Job {
  Frontend,
  Backend = 50,
  Designer,
}

const job: Job = Job.Backend
console.log(job)

const job2: Job = Job.Backend
console.log(job2)

enum Membership {
  Simple,
  Standard,
  Premium,
}

const membership = Membership.Standard
// const membershipRevers = Membership[2];

// console.log(membership);
// console.log(membershipRevers);

enum SocialMedia {
  VK = "VK",
  INSTAGRAM = "INSTAGRAM",
  FACEBOOK = "FACEBOOK",
}

const social = SocialMedia.FACEBOOK
