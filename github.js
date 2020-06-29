class Github{
  constructor(){
    this.client_id = '5d9545d45fe1d973a1a1';
    this.client_secret = 'fdd6aa3c0102317ca99bc5414258b9a8587f181a';
    this.repos_count = 3;
    this.repos_sort = 'created asc';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}