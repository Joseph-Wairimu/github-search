export class User {
    constructor(
        public name: string,
        public avatar_url: string,
        public blog: string,
        public html_url: string,
        public location: string,
        public bio: string,
        public public_repos: number,
        public followers: number,
        public following: number,
        public created_at: Date,
        public company?: string,
      ) {}

}
