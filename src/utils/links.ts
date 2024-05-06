export const facebook = 'https://www.facebook.com/CFoodstop/';
export const telephone = 'tel:207-829-3250';

export const imageResizeDomain = 'https://fstop.connorbray.net/cdn-cgi/image';

export const imageResize = (path: string, options?: string[]): string => {
	// const resizeURL = 'https://connorbray.net';
	const baseURL = 'https://fstop.connorbray.net';
	const resizeOptions = options?.join(',');
	const URL = `${baseURL}/cdn-cgi/image/${resizeOptions}/${normalizeSrc(
		path
	)}`;
	return URL;
};

const normalizeSrc = (src: string) => {
	return src.startsWith('/') ? src.slice(1) : src;
};

export async function cloudflareLoader({
	src,
	width,
	quality,
}: {
	src: string;
	width: number;
	quality?: number;
}) {
	'use server';
	const params = [`width=${width}`];
	if (quality) {
		params.push(`quality=${quality}`);
	}
	params.push('format=auto');
	const paramsString = params.join(',');

	return `/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`;
}
