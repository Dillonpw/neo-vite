/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
    	extend: {
    		colors: {
    			main: 'var(--main)',
    			overlay: 'var(--overlay)',
    			bg: 'var(--bg)',
    			bw: 'var(--bw)',
    			blank: 'var(--blank)',
    			text: 'var(--text)',
    			mtext: 'var(--mtext)',
    			border: 'var(--border)',
    			ring: 'var(--ring)',
    			ringOffset: 'var(--ring-offset)',
    			secondaryBlack: '#212121'
    		},
    		borderRadius: {
    			base: '11px'
    		},
    		boxShadow: {
    			shadow: 'var(--shadow)'
    		},
    		translate: {
    			boxShadowX: '4px',
    			boxShadowY: '3px',
    			reverseBoxShadowX: '-4px',
    			reverseBoxShadowY: '-3px'
    		},
    		fontWeight: {
    			base: '500',
    			heading: '900'
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			},

    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out',
    		}
    	}
    },
    plugins: [require('tailwindcss-animate')],
};
