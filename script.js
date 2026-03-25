document.addEventListener('DOMContentLoaded', () => {
    const fetchBtn = document.getElementById('fetchDataBtn');
    const apiResponse = document.getElementById('apiResponse');
    const jsonOutput = document.getElementById('jsonOutput');

    // Simulate calling a serverless REST API
    fetchBtn.addEventListener('click', async () => {
        // UI updates during fetch
        const originalText = fetchBtn.innerHTML;
        fetchBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Fetching...';
        fetchBtn.disabled = true;

        try {
            // Simulate network delay for serverless cold start/execution
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Simulated JSON response from an intelligent endpoint
            const mockApiResponse = {
                status: "success",
                code: 200,
                serverless_provider: "Cloudflare Workers",
                timestamp: new Date().toISOString(),
                data: {
                    model: "GPT-4 AI Simulator",
                    recent_projects: [
                        {
                            id: "proj_01",
                            name: "AI Document Analyzer",
                            stack: ["React", "AWS Lambda", "OpenAI API"],
                            role: "Fullstack Cloud Engineer"
                        },
                        {
                            id: "proj_02",
                            name: "Serverless Event Registration Platform",
                            stack: ["HTML/CSS/JS", "Cloudflare Pages", "KV Store"],
                            role: "Frontend & Cloud Architect"
                        }
                    ],
                    metrics: {
                        uptime: "99.99%",
                        avg_latency_ms: 42
                    }
                }
            };

            // Display the data
            jsonOutput.textContent = JSON.stringify(mockApiResponse, null, 4);
            
            // Show the response container with animation
            apiResponse.classList.remove('hidden');
            // Small delay to allow display:block to apply before animating opacity
            setTimeout(() => {
                apiResponse.style.opacity = '1';
                apiResponse.style.transform = 'translateY(0)';
            }, 10);
            
            fetchBtn.innerHTML = '<i class="fas fa-check"></i> Data Retrieved';
            setTimeout(() => {
                fetchBtn.innerHTML = originalText;
                fetchBtn.disabled = false;
            }, 2000);

        } catch (error) {
            jsonOutput.textContent = JSON.stringify({ error: "Failed to fetch API data" }, null, 4);
            apiResponse.classList.remove('hidden');
            fetchBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Error';
            fetchBtn.disabled = false;
        }
    });

    // Add gentle hover parallax effect to glass cards
    const cards = document.querySelectorAll('.glass-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Subtle rotation based on mouse position
            const xRot = 10 * ((y - rect.height / 2) / rect.height);
            const yRot = -10 * ((x - rect.width / 2) / rect.width);
            
            card.style.transform = `perspective(1000px) rotateX(${xRot}deg) rotateY(${yRot}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });
});
