module.exports = [
"[project]/components/PathogenGame.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PathogenGame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tokens.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const GW = 580, GH = 155, GROUND = 120, GRAV = 0.45;
const DIFF_CFG = {
    easy: {
        speed: 2.52,
        spawnInterval: 110,
        hitPad: 7,
        label: 'Resting state',
        sub: 'slow cells · generous hitbox',
        jumpV: -12.5
    },
    medium: {
        speed: 3.6,
        spawnInterval: 85,
        hitPad: 4,
        label: 'Immune activation',
        sub: 'default speed · standard density',
        jumpV: -11.2
    },
    hard: {
        speed: 4.68,
        spawnInterval: 60,
        hitPad: 2,
        label: 'Cytokine storm',
        sub: 'fast · dense · cells track you',
        jumpV: -10
    }
};
// ── Cell radius for collision ────────────────────────────────────────────────
function cellRadius(type) {
    if (type === 'macro') return 18;
    if (type === 'tcell_adaptive') return 9;
    if (type === 'complement') return 6;
    if (type === 'neutrophil') return 12;
    return 13;
}
// ── Draw pathogen (player) ───────────────────────────────────────────────────
function drawPathogen(ctx, x, y) {
    const r = 13, cx = x, cy = y - r;
    for(let i = 0; i < 8; i++){
        const a = i / 8 * Math.PI * 2;
        ctx.strokeStyle = '#22c55e';
        ctx.lineWidth = 1.5;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(cx + r * Math.cos(a), cy + r * Math.sin(a));
        ctx.lineTo(cx + (r + 6) * Math.cos(a), cy + (r + 6) * Math.sin(a));
        ctx.stroke();
        ctx.fillStyle = '#16a34a';
        ctx.beginPath();
        ctx.arc(cx + (r + 6) * Math.cos(a), cy + (r + 6) * Math.sin(a), 2, 0, Math.PI * 2);
        ctx.fill();
    }
    ctx.fillStyle = '#4ade80';
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#22c55e';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.fillStyle = '#14532d';
    ctx.beginPath();
    ctx.arc(cx - 4, cy - 3, 2.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(cx + 3, cy - 3, 2.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#14532d';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(cx, cy + 1, 4, 0.2, Math.PI - 0.2);
    ctx.stroke();
}
// ── Draw immune cell ─────────────────────────────────────────────────────────
function drawCell(ctx, x, groundY, type, yOff = 0) {
    const baseY = groundY + yOff;
    if (type === 'tcell') {
        // NK cell — red, 3 arms
        const r = 13, cx = x, cy = baseY - r;
        ctx.strokeStyle = '#d4451f';
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';
        for(let i = 0; i < 3; i++){
            const a = i / 3 * Math.PI * 2 - Math.PI / 2;
            const ex = cx + (r + 13) * Math.cos(a), ey = cy + (r + 13) * Math.sin(a);
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(ex, ey);
            ctx.stroke();
            [
                0.42,
                -0.42
            ].forEach((da)=>{
                ctx.beginPath();
                ctx.moveTo(ex, ey);
                ctx.lineTo(ex + 6 * Math.cos(a + da), ey + 6 * Math.sin(a + da));
                ctx.stroke();
            });
        }
        ctx.fillStyle = '#d4451f';
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = 'rgba(255,250,242,0.9)';
        ctx.font = "bold 7px 'JetBrains Mono', monospace";
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('NK', cx, cy);
    } else if (type === 'antibody') {
        // B cell — dark, Y-shape antibody
        const r = 13, cx = x, cy = baseY - r;
        ctx.strokeStyle = '#241813';
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';
        for(let i = 0; i < 2; i++){
            const a = i / 2 * Math.PI * 2 - Math.PI / 2;
            const ex = cx + (r + 13) * Math.cos(a), ey = cy + (r + 13) * Math.sin(a);
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(ex, ey);
            ctx.stroke();
            [
                0.42,
                -0.42
            ].forEach((da)=>{
                ctx.beginPath();
                ctx.moveTo(ex, ey);
                ctx.lineTo(ex + 6 * Math.cos(a + da), ey + 6 * Math.sin(a + da));
                ctx.stroke();
            });
        }
        ctx.fillStyle = '#241813';
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = 'rgba(255,250,242,0.9)';
        ctx.font = "bold 7px 'JetBrains Mono', monospace";
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('Ab', cx, cy);
    } else if (type === 'macro') {
        // Macrophage — large grey, pseudopod arms
        const r = 18, cx = x, cy = baseY - r;
        ctx.strokeStyle = '#7a6c63';
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';
        for(let i = 0; i < 4; i++){
            const a = i / 4 * Math.PI * 2 - Math.PI / 4;
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(cx + (r + 10) * Math.cos(a), cy + (r + 10) * Math.sin(a));
            ctx.stroke();
        }
        ctx.fillStyle = '#7a6c63';
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = 'rgba(255,250,242,0.9)';
        ctx.font = "bold 8px 'JetBrains Mono', monospace";
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('M', cx, cy);
    } else if (type === 'neutrophil') {
        // Multi-lobed nucleus — amber, 5 lobes arranged in rough cluster
        const cx = x, cy = baseY - 14;
        const lobes = [
            {
                dx: -7,
                dy: 4
            },
            {
                dx: 0,
                dy: -3
            },
            {
                dx: 7,
                dy: 4
            },
            {
                dx: -4,
                dy: 10
            },
            {
                dx: 4,
                dy: 10
            }
        ];
        ctx.fillStyle = '#f59e0b';
        lobes.forEach(({ dx, dy })=>{
            ctx.beginPath();
            ctx.arc(cx + dx, cy + dy, 7, 0, Math.PI * 2);
            ctx.fill();
        });
        ctx.strokeStyle = '#d97706';
        ctx.lineWidth = 1.2;
        lobes.forEach(({ dx, dy })=>{
            ctx.beginPath();
            ctx.arc(cx + dx, cy + dy, 7, 0, Math.PI * 2);
            ctx.stroke();
        });
        ctx.fillStyle = '#92400e';
        ctx.font = "bold 6px 'JetBrains Mono', monospace";
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('N', cx, cy + 3);
    } else if (type === 'tcell_adaptive') {
        // T cell — small sky-blue, forked TCR receptors
        const r = 9, cx = x, cy = baseY - r;
        ctx.strokeStyle = '#0ea5e9';
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        [
            -0.45,
            0.45
        ].forEach((offset)=>{
            const a = -Math.PI / 2 + offset;
            const ex = cx + (r + 8) * Math.cos(a), ey = cy + (r + 8) * Math.sin(a);
            ctx.beginPath();
            ctx.moveTo(cx + r * Math.cos(a), cy + r * Math.sin(a));
            ctx.lineTo(ex, ey);
            ctx.stroke();
            [
                0.4,
                -0.4
            ].forEach((da)=>{
                ctx.beginPath();
                ctx.moveTo(ex, ey);
                ctx.lineTo(ex + 6 * Math.cos(a + da), ey + 6 * Math.sin(a + da));
                ctx.stroke();
            });
        });
        ctx.fillStyle = '#0ea5e9';
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = 'rgba(255,250,242,0.9)';
        ctx.font = "bold 6px 'JetBrains Mono', monospace";
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('T', cx, cy);
    } else if (type === 'complement') {
        // Tiny hexagon — pink, hard to see until close
        const r = 6, cx = x, cy = baseY - r - 2;
        ctx.fillStyle = '#ec4899';
        ctx.beginPath();
        for(let i = 0; i < 6; i++){
            const a = i / 6 * Math.PI * 2 - Math.PI / 6;
            i === 0 ? ctx.moveTo(cx + r * Math.cos(a), cy + r * Math.sin(a)) : ctx.lineTo(cx + r * Math.cos(a), cy + r * Math.sin(a));
        }
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = '#be185d';
        ctx.lineWidth = 1;
        ctx.stroke();
        for(let i = 0; i < 6; i++){
            const a = i / 6 * Math.PI * 2;
            ctx.strokeStyle = '#f9a8d4';
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(cx + r * 0.6 * Math.cos(a), cy + r * 0.6 * Math.sin(a));
            ctx.lineTo(cx + (r + 4) * Math.cos(a), cy + (r + 4) * Math.sin(a));
            ctx.stroke();
        }
    }
}
// ── Loss messages ────────────────────────────────────────────────────────────
const CELL_MESSAGES = {
    tcell: {
        name: 'NK cell',
        blurb: 'NK cells punch holes in infected cells using toxic proteins called perforins — no mercy, no escape.'
    },
    antibody: {
        name: 'B cell',
        blurb: 'B cells tag pathogens with antibodies so the rest of the immune system knows exactly what to destroy.'
    },
    macro: {
        name: 'macrophage',
        blurb: 'Macrophages engulf and digest pathogens whole — you just became lunch.'
    },
    neutrophil: {
        name: 'neutrophil',
        blurb: 'Neutrophils are the first responders of the immune system. They swarm infection sites and release enzymes that destroy anything foreign. Fast, aggressive, no mercy.'
    },
    tcell_adaptive: {
        name: 'T cell',
        blurb: 'T cells are the assassins of the adaptive immune system, trained to recognize and destroy specific targets. Once they know what you are, there\'s no hiding.'
    },
    complement: {
        name: 'complement protein',
        blurb: 'Complement proteins coat pathogens and punch holes in their membranes. You were tagged, coated, and dissolved. Classic.'
    }
};
function PathogenGame() {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const bestRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [gameState, setGameState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [difficulty, setDifficulty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isNewBest, setIsNewBest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [best, setBest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [hitType, setHitType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('tcell');
    // Hydration-safe: read localStorage only after mount so SSR and client agree on 0
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
        setBest(parseInt(localStorage.getItem('pg-best') || '0'));
    }, []);
    // Keep bestRef in sync so tick closure can read latest value
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        bestRef.current = best;
    }, [
        best
    ]);
    const initState = (diff)=>{
        const cfg = DIFF_CFG[diff];
        return {
            py: GROUND,
            pvy: 0,
            jumping: false,
            obstacles: [],
            frame: 0,
            score: 0,
            speed: cfg.speed,
            spawnCD: 50,
            spawnInterval: cfg.spawnInterval,
            alive: true,
            lastHitType: 'tcell',
            difficulty: diff,
            newBestFlash: 0,
            lastTimestamp: 0
        };
    };
    const tick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((timestamp)=>{
        const s = stateRef.current;
        if (!s || !s.alive) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        // Delta time: normalize to 60fps baseline, cap at 3 frames (~50ms) to prevent jumps after tab switch
        const rawDt = s.lastTimestamp === 0 ? 16.667 : timestamp - s.lastTimestamp;
        const dt = Math.min(rawDt / 16.667, 3);
        s.lastTimestamp = timestamp;
        s.frame += dt;
        s.score += dt;
        const scoreVal = Math.floor(s.score / 6);
        const cfg = DIFF_CFG[s.difficulty];
        // ── Escalating speed/density ───────────────────────────────────────────
        const targetSpeed = scoreVal < 200 ? cfg.speed : scoreVal < 500 ? cfg.speed + 0.9 : cfg.speed + 1.8;
        const targetInterval = scoreVal < 200 ? cfg.spawnInterval : scoreVal < 500 ? Math.max(cfg.spawnInterval - 15, 42) : Math.max(cfg.spawnInterval - 28, 35);
        s.speed += (targetSpeed - s.speed) * 0.008 * dt;
        s.spawnInterval += (targetInterval - s.spawnInterval) * 0.008 * dt;
        // ── Physics ────────────────────────────────────────────────────────────
        if (s.jumping || s.py < GROUND) {
            s.pvy += GRAV * dt;
            s.py = Math.min(s.py + s.pvy * dt, GROUND);
            if (s.py >= GROUND) {
                s.py = GROUND;
                s.pvy = 0;
                s.jumping = false;
            }
        }
        // ── Spawn ──────────────────────────────────────────────────────────────
        s.spawnCD -= dt;
        if (s.spawnCD <= 0) {
            const pool = [
                'tcell',
                'tcell',
                'antibody',
                'macro',
                'neutrophil',
                'neutrophil',
                'complement'
            ];
            if (scoreVal >= 300) pool.push('tcell_adaptive', 'tcell_adaptive');
            const chosen = pool[Math.floor(Math.random() * pool.length)];
            if (chosen === 'complement') {
                // Cluster of 3 staggered
                for(let i = 0; i < 3; i++){
                    s.obstacles.push({
                        x: GW + 40 + i * 24,
                        type: 'complement',
                        yOff: 0,
                        yVel: 0
                    });
                }
            } else {
                s.obstacles.push({
                    x: GW + 40,
                    type: chosen,
                    yOff: 0,
                    yVel: 0
                });
            }
            // Extra cells at higher scores
            if (scoreVal >= 200 && Math.random() < 0.35) {
                s.obstacles.push({
                    x: GW + 110,
                    type: 'complement',
                    yOff: 0,
                    yVel: 0
                });
            }
            if (scoreVal >= 500 && Math.random() < 0.4) {
                s.obstacles.push({
                    x: GW + 80,
                    type: pool[Math.floor(Math.random() * pool.length)],
                    yOff: 0,
                    yVel: 0
                });
            }
            s.spawnCD = Math.floor(s.spawnInterval) + Math.floor(Math.random() * 28);
        }
        // ── Move obstacles ─────────────────────────────────────────────────────
        s.obstacles = s.obstacles.filter((o)=>o.x > -80);
        s.obstacles.forEach((o)=>{
            let spd = s.speed;
            if (o.type === 'neutrophil') {
                // Erratic y-bob
                o.yVel += (Math.random() - 0.5) * 1.0;
                o.yVel = Math.max(-3.5, Math.min(3.5, o.yVel));
                o.yOff += o.yVel * dt;
                o.yOff = Math.max(-18, Math.min(8, o.yOff));
                spd *= 1.15; // naturally faster
            }
            if (o.type === 'tcell_adaptive') spd *= 1.45; // fast T cell
            // Hard mode / score 500+: periodic burst toward player
            const isBurstMode = s.difficulty === 'hard' || scoreVal >= 500;
            if (isBurstMode && o.x > 80 && Math.floor(s.frame) % 160 < 18) spd *= 1.9;
            o.x -= spd * dt;
        });
        // ── Collision ──────────────────────────────────────────────────────────
        const PR = 11, px = 70;
        const hitPad = cfg.hitPad;
        for (const o of s.obstacles){
            const or = cellRadius(o.type);
            const oy = GROUND + o.yOff;
            const dx = px - o.x, dy = s.py - PR - (oy - or);
            if (Math.sqrt(dx * dx + dy * dy) < PR + or - hitPad) {
                s.alive = false;
                s.lastHitType = o.type;
                const finalScore = Math.floor(s.score / 6);
                const newBestVal = Math.max(bestRef.current, finalScore);
                const beaten = finalScore > bestRef.current;
                setBest(newBestVal);
                localStorage.setItem('pg-best', String(newBestVal));
                setScore(finalScore);
                setIsNewBest(beaten);
                setHitType(o.type);
                setGameState('dead');
                return;
            }
        }
        // ── New best flash during play ─────────────────────────────────────────
        if (s.newBestFlash > 0) s.newBestFlash -= dt;
        if (scoreVal > 0 && scoreVal > bestRef.current && s.newBestFlash <= 0) {
            s.newBestFlash = 100;
        }
        setScore(scoreVal);
        // ── Draw ───────────────────────────────────────────────────────────────
        ctx.clearRect(0, 0, GW, GH);
        ctx.fillStyle = 'rgba(247,241,232,0.4)';
        ctx.fillRect(0, 0, GW, GH);
        ctx.strokeStyle = 'rgba(36,24,19,0.12)';
        ctx.lineWidth = 1;
        ctx.setLineDash([
            4,
            6
        ]);
        ctx.beginPath();
        ctx.moveTo(0, GROUND + 2);
        ctx.lineTo(GW, GROUND + 2);
        ctx.stroke();
        ctx.setLineDash([]);
        s.obstacles.forEach((o)=>drawCell(ctx, o.x, GROUND, o.type, o.yOff));
        drawPathogen(ctx, 70, s.py);
        if (s.newBestFlash > 0) {
            const alpha = Math.min(s.newBestFlash / 30, 1) * 0.9;
            ctx.fillStyle = `rgba(212,69,31,${alpha})`;
            ctx.font = "700 10px 'JetBrains Mono', monospace";
            ctx.textAlign = 'right';
            ctx.textBaseline = 'top';
            ctx.fillText('NEW BEST', GW - 14, 12);
        }
        rafRef.current = requestAnimationFrame(tick);
    }, []);
    const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((diff)=>{
        stateRef.current = initState(diff);
        setGameState('playing');
        setScore(0);
        setIsNewBest(false);
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(tick);
    }, [
        tick
    ]);
    const jump = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (gameState === 'dead' && difficulty) {
            start(difficulty);
            return;
        }
        if (gameState === 'idle') return; // wait for difficulty selection
        const s = stateRef.current;
        if (s && !s.jumping && s.py >= GROUND) {
            s.pvy = DIFF_CFG[s.difficulty].jumpV;
            s.jumping = true;
        }
    }, [
        gameState,
        difficulty,
        start
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onKey = (e)=>{
            if (e.code === 'Space' || e.key === 'ArrowUp') {
                e.preventDefault();
                jump();
            }
        };
        window.addEventListener('keydown', onKey);
        return ()=>window.removeEventListener('keydown', onKey);
    }, [
        jump
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>{
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        }, []);
    // ── Canvas for idle / dead screens ────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (gameState !== 'idle' && gameState !== 'dead') return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, GW, GH);
        ctx.fillStyle = 'rgba(247,241,232,0.4)';
        ctx.fillRect(0, 0, GW, GH);
        ctx.strokeStyle = 'rgba(36,24,19,0.12)';
        ctx.lineWidth = 1;
        ctx.setLineDash([
            4,
            6
        ]);
        ctx.beginPath();
        ctx.moveTo(0, GROUND + 2);
        ctx.lineTo(GW, GROUND + 2);
        ctx.stroke();
        ctx.setLineDash([]);
        drawPathogen(ctx, 70, GROUND);
        if (gameState === 'dead') {
            drawCell(ctx, GW - 45, GROUND, hitType, 0);
            if (isNewBest) {
                ctx.fillStyle = '#d4451f';
                ctx.font = "700 11px 'JetBrains Mono', monospace";
                ctx.textAlign = 'right';
                ctx.textBaseline = 'top';
                ctx.fillText('NEW BEST', GW - 14, 10);
            }
        }
    }, [
        gameState,
        hitType,
        isNewBest
    ]);
    // ── Render ─────────────────────────────────────────────────────────────────
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 10
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                            fontSize: '0.5625rem',
                            fontWeight: 500,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted
                        },
                        children: "Pathogen Escape"
                    }, void 0, false, {
                        fileName: "[project]/components/PathogenGame.tsx",
                        lineNumber: 426,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 16
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                    fontSize: '0.6875rem',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted
                                },
                                children: [
                                    "BEST ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink,
                                            fontWeight: 500
                                        },
                                        children: mounted ? String(best).padStart(5, '0') : '00000'
                                    }, void 0, false, {
                                        fileName: "[project]/components/PathogenGame.tsx",
                                        lineNumber: 434,
                                        columnNumber: 18
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PathogenGame.tsx",
                                lineNumber: 433,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                    fontSize: '0.6875rem',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted
                                },
                                children: [
                                    "SCORE ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ember,
                                            fontWeight: 500
                                        },
                                        children: String(score).padStart(5, '0')
                                    }, void 0, false, {
                                        fileName: "[project]/components/PathogenGame.tsx",
                                        lineNumber: 437,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PathogenGame.tsx",
                                lineNumber: 436,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PathogenGame.tsx",
                        lineNumber: 432,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PathogenGame.tsx",
                lineNumber: 425,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                width: GW,
                height: GH,
                onClick: jump,
                onTouchStart: (e)=>{
                    e.preventDefault();
                    jump();
                },
                style: {
                    width: '100%',
                    height: 'auto',
                    borderRadius: 14,
                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].hairline}`,
                    cursor: gameState === 'idle' ? 'default' : 'pointer',
                    background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].canvas,
                    display: 'block',
                    touchAction: 'manipulation'
                }
            }, void 0, false, {
                fileName: "[project]/components/PathogenGame.tsx",
                lineNumber: 443,
                columnNumber: 7
            }, this),
            (gameState === 'idle' || gameState === 'dead') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 8
                },
                children: [
                    gameState === 'dead' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                            fontSize: '0.5625rem',
                            fontWeight: 500,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted
                        },
                        children: "Play again?"
                    }, void 0, false, {
                        fileName: "[project]/components/PathogenGame.tsx",
                        lineNumber: 462,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 8,
                            flexWrap: 'wrap',
                            justifyContent: 'center'
                        },
                        children: [
                            'easy',
                            'medium',
                            'hard'
                        ].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setDifficulty(d);
                                    start(d);
                                },
                                style: {
                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                                    fontWeight: 700,
                                    fontSize: '0.8125rem',
                                    padding: '7px 16px',
                                    borderRadius: 10,
                                    cursor: 'pointer',
                                    border: `1px solid ${difficulty === d ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ember : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].border}`,
                                    background: difficulty === d ? 'rgba(212,69,31,0.08)' : 'transparent',
                                    color: difficulty === d ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ember : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink,
                                    transition: 'all 160ms',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: 2
                                },
                                onMouseEnter: (e)=>{
                                    if (difficulty !== d) e.currentTarget.style.background = 'rgba(36,24,19,0.04)';
                                },
                                onMouseLeave: (e)=>{
                                    if (difficulty !== d) e.currentTarget.style.background = 'transparent';
                                },
                                children: [
                                    DIFF_CFG[d].label,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                            fontSize: '0.5rem',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                                            letterSpacing: '0.06em'
                                        },
                                        children: DIFF_CFG[d].sub
                                    }, void 0, false, {
                                        fileName: "[project]/components/PathogenGame.tsx",
                                        lineNumber: 494,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, d, true, {
                                fileName: "[project]/components/PathogenGame.tsx",
                                lineNumber: 471,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/PathogenGame.tsx",
                        lineNumber: 469,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PathogenGame.tsx",
                lineNumber: 460,
                columnNumber: 9
            }, this),
            gameState === 'idle' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                    fontSize: '0.6875rem',
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                    textAlign: 'center',
                    letterSpacing: '0.04em'
                },
                children: difficulty ? 'Tap the canvas or press Space to start' : "You're a pathogen — evade the immune system. Choose a difficulty to begin."
            }, void 0, false, {
                fileName: "[project]/components/PathogenGame.tsx",
                lineNumber: 505,
                columnNumber: 9
            }, this),
            gameState === 'dead' && (()=>{
                const hit = CELL_MESSAGES[hitType] ?? CELL_MESSAGES['tcell'];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 6
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                                fontWeight: 800,
                                fontSize: '0.9375rem',
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink
                            },
                            children: [
                                "Caught by a ",
                                hit.name,
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/PathogenGame.tsx",
                            lineNumber: 515,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                                fontSize: '0.8125rem',
                                lineHeight: 1.6,
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted
                            },
                            children: hit.blurb
                        }, void 0, false, {
                            fileName: "[project]/components/PathogenGame.tsx",
                            lineNumber: 518,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                fontSize: '0.5625rem',
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                marginTop: 2
                            },
                            children: "Tap the canvas or press Space to replay"
                        }, void 0, false, {
                            fileName: "[project]/components/PathogenGame.tsx",
                            lineNumber: 521,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/PathogenGame.tsx",
                    lineNumber: 514,
                    columnNumber: 11
                }, this);
            })(),
            gameState === 'playing' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                    fontSize: '0.75rem',
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                    textAlign: 'center'
                },
                children: "You're a pathogen evading the immune system. How long can you last?"
            }, void 0, false, {
                fileName: "[project]/components/PathogenGame.tsx",
                lineNumber: 528,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PathogenGame.tsx",
        lineNumber: 422,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Landing.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Landing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tokens.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$navigationContext$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/navigationContext.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PathogenGame$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PathogenGame.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────
const NOW_ITEMS = [
    {
        eyebrow: 'BUILDING',
        text: 'Optimizing the PrimeFlow EBER Flow-FISH protocol for clinical use at Stanford — finalizing antibody panels for single-cell resolution on the Cytek Aurora Evo.'
    },
    {
        eyebrow: 'WRITING',
        text: 'Drafting the manuscript for the DHR-based neutrophil oxidative burst assay; validation report submitted to Stanford Hospitals for clinical lab approval.'
    },
    {
        eyebrow: 'TINKERING',
        text: 'Building a flow cytometry panel-builder tool in Python — pulling fluorochrome spectra and flagging spillover before the wet lab even opens.'
    },
    {
        eyebrow: 'READING',
        text: 'Diving into foundational immunology and computational biology — and reading deep on NK cell biology and clinical assay design as we scope the next set of assays in the pipeline.'
    }
];
const INTERESTS = [
    'Psychology',
    'Writing',
    'Sketching',
    'Puzzles',
    'Hiking',
    'New cities, new everything'
];
const FEATURED = [
    {
        eyebrow: 'STANFORD · 2025',
        title: 'DHR-based neutrophil oxidative burst assay',
        tags: [
            'CLINICAL',
            'FLOW CYTOMETRY',
            'STANFORD PATHOLOGY'
        ],
        path: '/science?scroll=project-dhr'
    },
    {
        eyebrow: 'CARL JUNE LAB · 2023–2025',
        title: 'NK cell engineering via feeder cell systems',
        tags: [
            'NK CELLS',
            'CELL ENGINEERING',
            'LENTIVIRUS'
        ],
        path: '/science?scroll=project-nk-engineering'
    },
    {
        eyebrow: 'MODERNA · 2024',
        title: 'mRNA-LNP scale-up and stability optimization',
        tags: [
            'mRNA-LNP',
            'PROCESS DEVELOPMENT',
            'GMP'
        ],
        path: '/science?scroll=project-mrna-lnp'
    }
];
function Landing() {
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$navigationContext$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNavigate"])();
    const [hovCard, setHovCard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [contactOpen, setContactOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const contactRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!contactOpen) return;
        const handler = (e)=>{
            if (contactRef.current && !contactRef.current.contains(e.target)) {
                setContactOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return ()=>document.removeEventListener('mousedown', handler);
    }, [
        contactOpen
    ]);
    const handleCardHover = (i)=>{
        setHovCard(i);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(`.work-card-${i}`, {
            y: -4,
            duration: 0.25,
            ease: 'power2.out',
            boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shadows"].cardHover
        });
    };
    const handleCardLeave = (i)=>{
        setHovCard(null);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(`.work-card-${i}`, {
            y: 0,
            duration: 0.25,
            ease: 'power2.in',
            boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shadows"].card
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].surface,
            minHeight: '100vh'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: 1280,
                        width: '100%',
                        margin: '0 auto',
                        padding: 'clamp(40px, 6vh, 64px) clamp(20px, 3vw, 48px)',
                        boxSizing: 'border-box'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-two-col",
                        style: {
                            display: 'flex',
                            gap: 'clamp(32px, 4.5vw, 72px)',
                            alignItems: 'center',
                            flexWrap: 'wrap'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: '1 1 360px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 22
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hero-eyebrow",
                                        style: {
                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                            fontSize: '0.6875rem',
                                            fontWeight: 500,
                                            letterSpacing: '0.12em',
                                            textTransform: 'uppercase',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted
                                        },
                                        children: "Cellular Immunologist · Translational Biologist"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Landing.tsx",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                                            fontWeight: 800,
                                            fontSize: 'clamp(2.75rem,6vw,5rem)',
                                            lineHeight: 0.95,
                                            letterSpacing: '-0.045em',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    overflow: 'hidden',
                                                    paddingBottom: '0.15em'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hero-name-word",
                                                    children: "Ananyaa"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Landing.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Landing.tsx",
                                                lineNumber: 112,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    overflow: 'hidden',
                                                    paddingBottom: '0.15em'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hero-name-word",
                                                    children: "Srinivasan"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Landing.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Landing.tsx",
                                                lineNumber: 115,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Landing.tsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hero-bio",
                                        style: {
                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                                            fontSize: '1.0625rem',
                                            lineHeight: 1.62,
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                                            maxWidth: '46ch'
                                        },
                                        children: "Hi, I'm Anu. I work at the intersection of immunology, biological engineering, and clinical translation, currently building diagnostic assays at Stanford Pathology. Outside the lab, I apply that same thinking to biotech strategy and use computation to make the science faster. I'm happiest when an unsolved biological question has an answer that actually reaches a patient."
                                    }, void 0, false, {
                                        fileName: "[project]/components/Landing.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: 10,
                                            flexWrap: 'wrap',
                                            marginTop: 4
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "hero-cta",
                                                onClick: ()=>navigate('/science'),
                                                style: {
                                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                                                    fontWeight: 800,
                                                    fontSize: '0.9375rem',
                                                    letterSpacing: '-0.01em',
                                                    padding: '13px 24px',
                                                    borderRadius: 14,
                                                    border: 'none',
                                                    cursor: 'pointer',
                                                    color: '#fffaf2',
                                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gradient"],
                                                    boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shadows"].button
                                                },
                                                children: "See what I'm working on"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Landing.tsx",
                                                lineNumber: 135,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                ref: contactRef,
                                                style: {
                                                    position: 'relative',
                                                    display: 'inline-block'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "hero-cta",
                                                        onClick: ()=>setContactOpen((o)=>!o),
                                                        style: {
                                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                                                            fontWeight: 700,
                                                            fontSize: '0.9375rem',
                                                            padding: '13px 24px',
                                                            borderRadius: 14,
                                                            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].border}`,
                                                            cursor: 'pointer',
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink,
                                                            background: 'transparent',
                                                            transition: 'background 160ms'
                                                        },
                                                        onMouseEnter: (e)=>{
                                                            e.currentTarget.style.background = 'rgba(36,24,19,0.04)';
                                                        },
                                                        onMouseLeave: (e)=>{
                                                            e.currentTarget.style.background = 'transparent';
                                                        },
                                                        children: "Get in touch"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Landing.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 19
                                                    }, this),
                                                    contactOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            position: 'absolute',
                                                            top: 'calc(100% + 8px)',
                                                            left: 0,
                                                            background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].surface,
                                                            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].border}`,
                                                            borderRadius: 14,
                                                            padding: '18px 20px',
                                                            boxShadow: '0 4px 24px rgba(36,24,19,0.12)',
                                                            zIndex: 100,
                                                            minWidth: 280
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    marginBottom: 14
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                                                            fontSize: '0.5rem',
                                                                            letterSpacing: '0.12em',
                                                                            textTransform: 'uppercase',
                                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                                                                            marginBottom: 7
                                                                        },
                                                                        children: "Email"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Landing.tsx",
                                                                        lineNumber: 173,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: 'flex',
                                                                            alignItems: 'center',
                                                                            justifyContent: 'space-between',
                                                                            gap: 10
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                href: "mailto:sriniananyaa@gmail.com",
                                                                                style: {
                                                                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                                                                    fontSize: '0.8125rem',
                                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ember,
                                                                                    textDecoration: 'none',
                                                                                    userSelect: 'all'
                                                                                },
                                                                                children: "sriniananyaa@gmail.com"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/Landing.tsx",
                                                                                lineNumber: 177,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>{
                                                                                    navigator.clipboard.writeText('sriniananyaa@gmail.com');
                                                                                    setCopied(true);
                                                                                    setTimeout(()=>setCopied(false), 2000);
                                                                                },
                                                                                style: {
                                                                                    display: 'flex',
                                                                                    alignItems: 'center',
                                                                                    justifyContent: 'center',
                                                                                    padding: '4px 6px',
                                                                                    borderRadius: 6,
                                                                                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].border}`,
                                                                                    background: 'transparent',
                                                                                    cursor: 'pointer',
                                                                                    color: copied ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ember : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                                                                                    flexShrink: 0,
                                                                                    transition: 'color 160ms'
                                                                                },
                                                                                children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                    width: "13",
                                                                                    height: "13",
                                                                                    viewBox: "0 0 24 24",
                                                                                    fill: "none",
                                                                                    stroke: "currentColor",
                                                                                    strokeWidth: "2.5",
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                                        points: "20 6 9 17 4 12"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/Landing.tsx",
                                                                                        lineNumber: 185,
                                                                                        columnNumber: 178
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/Landing.tsx",
                                                                                    lineNumber: 185,
                                                                                    columnNumber: 33
                                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                    width: "13",
                                                                                    height: "13",
                                                                                    viewBox: "0 0 24 24",
                                                                                    fill: "none",
                                                                                    stroke: "currentColor",
                                                                                    strokeWidth: "2",
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                                            x: "9",
                                                                                            y: "9",
                                                                                            width: "13",
                                                                                            height: "13",
                                                                                            rx: "2",
                                                                                            ry: "2"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/Landing.tsx",
                                                                                            lineNumber: 186,
                                                                                            columnNumber: 176
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                            d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/Landing.tsx",
                                                                                            lineNumber: 186,
                                                                                            columnNumber: 233
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/components/Landing.tsx",
                                                                                    lineNumber: 186,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/Landing.tsx",
                                                                                lineNumber: 180,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/Landing.tsx",
                                                                        lineNumber: 176,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/Landing.tsx",
                                                                lineNumber: 172,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    height: 1,
                                                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].divider,
                                                                    marginBottom: 14
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Landing.tsx",
                                                                lineNumber: 191,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                                                            fontSize: '0.5rem',
                                                                            letterSpacing: '0.12em',
                                                                            textTransform: 'uppercase',
                                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                                                                            marginBottom: 7
                                                                        },
                                                                        children: "LinkedIn"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Landing.tsx",
                                                                        lineNumber: 194,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: "https://linkedin.com/in/ananyaa-srinivasan/",
                                                                        target: "_blank",
                                                                        rel: "noopener",
                                                                        style: {
                                                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                                                                            fontSize: '0.8125rem',
                                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ember,
                                                                            textDecoration: 'none'
                                                                        },
                                                                        children: "linkedin.com/in/ananyaa-srinivasan →"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Landing.tsx",
                                                                        lineNumber: 197,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/Landing.tsx",
                                                                lineNumber: 193,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Landing.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Landing.tsx",
                                                lineNumber: 147,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Landing.tsx",
                                        lineNumber: 134,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Landing.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: '0 0 clamp(280px, 27%, 340px)'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hero-tile",
                                    style: {
                                        borderRadius: 20,
                                        padding: '28px 26px',
                                        minHeight: 220,
                                        background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gradient"],
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                                fontSize: '0.5625rem',
                                                fontWeight: 500,
                                                letterSpacing: '0.12em',
                                                textTransform: 'uppercase',
                                                color: 'rgba(255,250,242,0.6)'
                                            },
                                            children: "CURRENT FOCUS"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Landing.tsx",
                                            lineNumber: 217,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                                                        fontWeight: 800,
                                                        fontSize: '1.375rem',
                                                        letterSpacing: '-0.03em',
                                                        color: '#fffaf2',
                                                        lineHeight: 1.2,
                                                        marginBottom: 12
                                                    },
                                                    children: "Building a functional immunology lab — bench to bedside"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Landing.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                                        fontSize: '0.6875rem',
                                                        color: 'rgba(255,250,242,0.65)',
                                                        lineHeight: 1.6
                                                    },
                                                    children: "Stanford Pathology · 2025–"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Landing.tsx",
                                                    lineNumber: 230,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Landing.tsx",
                                            lineNumber: 223,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Landing.tsx",
                                    lineNumber: 209,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Landing.tsx",
                                lineNumber: 208,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Landing.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Landing.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Landing.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1280,
                    margin: '0 auto',
                    padding: '0 28px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        height: 1,
                        background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].divider
                    }
                }, void 0, false, {
                    fileName: "[project]/components/Landing.tsx",
                    lineNumber: 245,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Landing.tsx",
                lineNumber: 244,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1280,
                    margin: '0 auto',
                    padding: '56px 28px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "now-grid",
                    style: {
                        display: 'grid',
                        gridTemplateColumns: '1fr 2fr',
                        gap: 56,
                        alignItems: 'start'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "now-heading",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                        fontSize: '0.5625rem',
                                        fontWeight: 500,
                                        letterSpacing: '0.12em',
                                        textTransform: 'uppercase',
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                                        marginBottom: 10
                                    },
                                    children: "Right now"
                                }, void 0, false, {
                                    fileName: "[project]/components/Landing.tsx",
                                    lineNumber: 252,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                                        fontWeight: 800,
                                        fontSize: '1.625rem',
                                        letterSpacing: '-0.03em',
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink,
                                        lineHeight: 1.15
                                    },
                                    children: [
                                        "What I'm",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/Landing.tsx",
                                            lineNumber: 263,
                                            columnNumber: 28
                                        }, this),
                                        "working on."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Landing.tsx",
                                    lineNumber: 259,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Landing.tsx",
                            lineNumber: 251,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                flexDirection: 'column'
                            },
                            children: NOW_ITEMS.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "now-item",
                                    style: {
                                        display: 'flex',
                                        gap: 20,
                                        padding: '16px 0',
                                        borderBottom: i < NOW_ITEMS.length - 1 ? `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].divider}` : 'none'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                                fontSize: '0.5625rem',
                                                fontWeight: 500,
                                                letterSpacing: '0.10em',
                                                textTransform: 'uppercase',
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ember,
                                                width: 90,
                                                flexShrink: 0,
                                                paddingTop: 3
                                            },
                                            children: item.eyebrow
                                        }, void 0, false, {
                                            fileName: "[project]/components/Landing.tsx",
                                            lineNumber: 277,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                                                fontSize: '0.9375rem',
                                                lineHeight: 1.62,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink
                                            },
                                            children: item.text
                                        }, void 0, false, {
                                            fileName: "[project]/components/Landing.tsx",
                                            lineNumber: 284,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/components/Landing.tsx",
                                    lineNumber: 269,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Landing.tsx",
                            lineNumber: 267,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Landing.tsx",
                    lineNumber: 250,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Landing.tsx",
                lineNumber: 249,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1280,
                    margin: '0 auto',
                    padding: '0 28px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        height: 1,
                        background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].divider
                    }
                }, void 0, false, {
                    fileName: "[project]/components/Landing.tsx",
                    lineNumber: 295,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Landing.tsx",
                lineNumber: 294,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1280,
                    margin: '0 auto',
                    padding: '56px 28px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                            fontWeight: 800,
                            fontSize: '1.625rem',
                            letterSpacing: '-0.03em',
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink,
                            marginBottom: 28
                        },
                        children: "Selected work"
                    }, void 0, false, {
                        fileName: "[project]/components/Landing.tsx",
                        lineNumber: 300,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "work-grid",
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: 14
                        },
                        children: FEATURED.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `work-card work-card-${i}`,
                                onMouseEnter: ()=>handleCardHover(i),
                                onMouseLeave: ()=>handleCardLeave(i),
                                onClick: ()=>navigate(p.path),
                                style: {
                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].surface,
                                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].hairline}`,
                                    borderRadius: 20,
                                    padding: '22px 24px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 10,
                                    boxShadow: hovCard === i ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shadows"].cardHover : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shadows"].card,
                                    transition: 'box-shadow 240ms cubic-bezier(0.4,0,0.2,1)',
                                    cursor: 'pointer'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                            fontSize: '0.5625rem',
                                            fontWeight: 500,
                                            letterSpacing: '0.12em',
                                            textTransform: 'uppercase',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted
                                        },
                                        children: p.eyebrow
                                    }, void 0, false, {
                                        fileName: "[project]/components/Landing.tsx",
                                        lineNumber: 323,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                                            fontSize: '1rem',
                                            fontWeight: 800,
                                            letterSpacing: '-0.02em',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink,
                                            lineHeight: 1.2
                                        },
                                        children: p.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/Landing.tsx",
                                        lineNumber: 329,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: 6,
                                            flexWrap: 'wrap',
                                            marginTop: 'auto'
                                        },
                                        children: p.tags.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                                    fontSize: '0.5rem',
                                                    fontWeight: 500,
                                                    letterSpacing: '0.08em',
                                                    textTransform: 'uppercase',
                                                    padding: '3px 8px',
                                                    background: 'rgba(36,24,19,0.07)',
                                                    borderRadius: 6,
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted
                                                },
                                                children: t
                                            }, t, false, {
                                                fileName: "[project]/components/Landing.tsx",
                                                lineNumber: 337,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Landing.tsx",
                                        lineNumber: 335,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/components/Landing.tsx",
                                lineNumber: 308,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Landing.tsx",
                        lineNumber: 306,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Landing.tsx",
                lineNumber: 299,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].canvas
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: 1280,
                        margin: '0 auto',
                        padding: '56px 28px'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "interests-game-grid",
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '1fr 2fr',
                            gap: 56,
                            alignItems: 'start'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "interests-heading",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                            fontSize: '0.5625rem',
                                            fontWeight: 500,
                                            letterSpacing: '0.12em',
                                            textTransform: 'uppercase',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                                            marginBottom: 10
                                        },
                                        children: "Outside the lab"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Landing.tsx",
                                        lineNumber: 359,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                                            fontWeight: 800,
                                            fontSize: '1.375rem',
                                            letterSpacing: '-0.03em',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink,
                                            marginBottom: 14
                                        },
                                        children: "I collect entry points."
                                    }, void 0, false, {
                                        fileName: "[project]/components/Landing.tsx",
                                        lineNumber: 366,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].body,
                                            fontSize: '0.9375rem',
                                            lineHeight: 1.6,
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                                            marginBottom: 18
                                        },
                                        children: "I collect entry points. A new city, a new skill, a concept I don't fully understand yet. I'll follow it until it makes sense. I sketch, write, spend too long on puzzles, and have a quiet obsession with psychology and how people think. Anything that makes my brain work a little harder is usually worth my time, and anything involving chocolate, matcha, or coconut is usually worth the detour."
                                    }, void 0, false, {
                                        fileName: "[project]/components/Landing.tsx",
                                        lineNumber: 372,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: 8,
                                            flexWrap: 'wrap'
                                        },
                                        children: INTERESTS.map((label)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "interest-pill",
                                                style: {
                                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].display,
                                                    fontWeight: 700,
                                                    fontSize: '0.8125rem',
                                                    padding: '7px 16px',
                                                    borderRadius: 9999,
                                                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].border}`,
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].ink,
                                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].surface
                                                },
                                                children: label
                                            }, label, false, {
                                                fileName: "[project]/components/Landing.tsx",
                                                lineNumber: 385,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Landing.tsx",
                                        lineNumber: 383,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Landing.tsx",
                                lineNumber: 358,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "game-section",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].mono,
                                            fontSize: '0.5625rem',
                                            fontWeight: 500,
                                            letterSpacing: '0.12em',
                                            textTransform: 'uppercase',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].muted,
                                            marginBottom: 14
                                        },
                                        children: "Need a break?"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Landing.tsx",
                                        lineNumber: 403,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PathogenGame$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/components/Landing.tsx",
                                        lineNumber: 410,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Landing.tsx",
                                lineNumber: 402,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Landing.tsx",
                        lineNumber: 355,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Landing.tsx",
                    lineNumber: 354,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Landing.tsx",
                lineNumber: 353,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Landing.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=components_0b54x1c._.js.map