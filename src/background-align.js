function alignBackground() {
				const screenW = screen.width;
				const screenH = screen.height;
				const offsetX = window.screenX + 221;
				const offsetY = window.screenY + 8;

				const bg = document.getElementById("background-media");
				if (bg) {
				bg.style.backgroundAttachment = "fixed";
				bg.style.backgroundRepeat = "no-repeat";
				bg.style.backgroundSize = `${screenW}px ${screenH}px`;
				bg.style.backgroundPosition = `-${offsetX}px -${offsetY}px`;
				bg.style.transition = "none";
				bg.style.pointerEvents = "none";
				bg.style.zIndex = "-1";
				}
				requestAnimationFrame(alignBackground);
			}

			window.addEventListener('load', () => {
				alignBackground();
			});