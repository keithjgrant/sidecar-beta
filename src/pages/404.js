import React from 'react';
import ArticleLayout from '../components/layouts/ArticleLayout';
import Meta from '../components/Meta';

const NotFoundPage = () => (
  <ArticleLayout>
    <Meta title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </ArticleLayout>
);

export default NotFoundPage;
