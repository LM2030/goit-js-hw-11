export class LoadMore {
  constructor(loadMore) {
    this.loadMore = loadMore;
    this.isHiddenLoadMore = this.loadMore.hasAttribute('hidden');
    this.isHiddenLoading =
      this.loadMore.classList.contains('is-loading-hidden');
    this.isVisibleLoading = this.loadMore.classList.contains('is-loading');
    this.template = `<div class="stop-load">
    <p>We're sorry, but you've reached the end of search results.</p>
    <a href="#search-form">Click to go up</a>
  </div>`;
  }

  loadingHidden() {
    this.loadMoreVisible();

    this.loadMore.classList.add('is-loading-hidden');

    if (this.isVisibleLoading) return;
    this.loadMore.classList.remove('is-loading');
  }

  loadingVisible() {
    this.loadMoreVisible();

    this.loadMore.classList.add('is-loading');

    if (this.isHiddenLoading) return;
    this.loadMore.classList.remove('is-loading-hidden');
  }

  loadMoreVisible() {
    if (!this.isHiddenLoadMore) return;
    this.loadMore.removeAttribute('hidden');
  }

  loadMoreIsHidden() {
    this.loadMore.setAttribute('hidden', true);
  }

  stopLoad(message) {
    this.loadMoreIsHidden();

    if (!message) return;
    message.info();
    this.loadMore.insertAdjacentHTML('afterend', this.template);
  }

  removeMessage() {
    const element = document.querySelector('.stop-load');
    if (!element) return;
    element.remove();
  }
}
