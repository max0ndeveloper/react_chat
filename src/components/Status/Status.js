import React from 'react';

const Status = ({className, status, isActive}) => {
  return (
      <section className={`${className} ${isActive}`}>
        <section className={status}>
          <svg xmlns="http://www.w3.org/2000/svg" height="512px" viewBox="0 -32 512.00011 512" width="512px">
            <g>
              <path
                  d="m342.382812 239.351562c-23.039062-35.941406-62.277343-57.402343-104.964843-57.402343s-81.925781 21.460937-104.960938 57.402343l-55.515625 86.605469c-9.210937 14.367188-13.460937 30.96875-12.292968 47.996094 1.167968 17.03125 7.648437 32.890625 18.738281 45.875 11.097656 12.972656 25.761719 21.839844 42.40625 25.644531 16.644531 3.804688 33.707031 2.179688 49.339843-4.691406l1.046876-.464844c39.335937-16.945312 84.285156-16.789062 123.519531.464844 10.121093 4.449219 20.84375 6.699219 31.664062 6.699219 5.882813 0 11.800781-.667969 17.664063-2.003907 16.644531-3.800781 31.308594-12.667968 42.410156-25.644531 11.09375-12.972656 17.578125-28.835937 18.75-45.871093 1.171875-17.035157-3.078125-33.632813-12.289062-48.007813zm0 0"
                  data-original="#000000" className="active-path" data-old_color="#000000" fill="#ED14DB"/>
              <path
                  d="m91.894531 239.238281c16.515625-6.34375 29.0625-19.652343 35.328125-37.476562 5.964844-16.960938 5.476563-36.109375-1.378906-53.921875-6.859375-17.800782-19.335938-32.332032-35.132812-40.921875-16.59375-9.019531-34.824219-10.488281-51.3125-4.132813-33.171876 12.753906-48.394532 53.746094-33.929688 91.398438 11.554688 29.96875 38.503906 48.886718 65.75 48.886718 6.957031 0 13.933594-1.234374 20.675781-3.832031zm0 0"
                  data-original="#000000" className="active-path" data-old_color="#000000" fill="#ED14DB"/>
              <path
                  d="m199.613281 171.386719c41.46875 0 75.207031-38.4375 75.207031-85.683594 0-47.257813-33.738281-85.703125-75.207031-85.703125-41.464843 0-75.199219 38.445312-75.199219 85.703125 0 47.246094 33.734376 85.683594 75.199219 85.683594zm0 0"
                  data-original="#000000" className="active-path" data-old_color="#000000" fill="#ED14DB"/>
              <path
                  d="m329.496094 192.4375h.003906c6.378906 2.117188 12.886719 3.128906 19.367188 3.128906 30.242187 0 59.714843-22.011718 70.960937-55.839844 6.476563-19.472656 6.050781-40.0625-1.199219-57.972656-7.585937-18.75-21.644531-32.359375-39.589844-38.324218-17.949218-5.964844-37.359374-3.476563-54.660156 7-16.527344 10.007812-29.191406 26.246093-35.660156 45.71875-13.652344 41.078124 4.640625 84.273437 40.777344 96.289062zm0 0"
                  data-original="#000000" className="active-path" data-old_color="#000000" fill="#ED14DB"/>
              <path
                  d="m487.875 182.4375-.011719-.011719c-28.597656-21.125-71.367187-11.96875-95.347656 20.421875-23.957031 32.40625-20.210937 75.972656 8.34375 97.113282 10.414063 7.714843 22.71875 11.402343 35.3125 11.402343 21.949219 0 44.785156-11.203125 60.050781-31.804687 23.953125-32.40625 20.210938-75.972656-8.347656-97.121094zm0 0"
                  data-original="#000000" className="active-path" data-old_color="#000000" fill="#ED14DB"/>
            </g>
          </svg>
        </section>
      </section>
  )
};
export default Status;