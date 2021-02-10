import React from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import PostForm from '../components/Postform';
import { Provider } from 'react-redux';
import store from '../components/store';

function addblog() {
	return (
		<Layout>

			<Head>
				<title>{siteTitle}</title>
			</Head>
				<Provider store={store}>
			<div>
				<h1>Add Blog page, Form.</h1>
				<p>Application to view.</p>
				<p>Reyomi page here!!!</p>
				
			</div>
			<PostForm />
			</Provider>
		</Layout>
	);
}

export default addblog;
