import { html } from '@rbardini/html'
import Icon from './icon.js'

/**
 * @param {string} url
 * @returns {string}
 */
const formatURL = url => url.replace(/^(https?:|)\/\//, '').replace(/\/$/, '')

/**
 * @param {string} [url]
 * @param {string} [name]
 * @param {boolean} [withIcon]
 * @returns {string | undefined}
 */
export default function Link(url, name, withIcon = false) {
  return name
    ? url
      ? html`<a href="${url}" class="link">${name} ${withIcon && Icon('external-link')}</a>`
      : name
    : url && html`<a href="${url}" class="link">${formatURL(url)} ${withIcon && Icon('external-link')}</a>`
}
