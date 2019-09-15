(function() {
    try {
        var i = window.$MicrosoftMaps8,
            t = i.Internal,
            bt = t._BoundsAccumulator,
            n = t._Debug,
            kt = t._Dispatcher,
            dt = t._WorkDispatcher,
            gt = t._EventBinding,
            ni = t._Gimme,
            u = t._Helper,
            o = t._JSEvent,
            ot = i.ImageryMapLayer,
            l = t._LatLonCrs,
            st = i.LocationRect,
            s = t._LruCache,
            c = i.Location,
            ti = i.MapMath,
            ii = t._MercatorCube,
            ri = i.MercatorCubeCrs,
            ui = t._MercatorTileUtility,
            b = t._Observable,
            a = t._ObservableObject,
            fi = t._Overlay,
            ei = t._OverlayManager,
            f = i.Point,
            v = i.Size,
            e = t._VectorMath,
            k = i.VectorMapLayer,
            ht = t._Network,
            d = t._GeometryGeneralizer,
            ct = i.BasicTemplate,
            lt = i.GlobalConfig,
            y = this && this.__extends || function() {
                var n = function(t, i) {
                    return n = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function(n, t) {
                        n.__proto__ = t
                    } || function(n, t) {
                        for (var i in t)
                            t.hasOwnProperty(i) && (n[i] = t[i])
                    }, n(t, i)
                };
                return function(t, i) {
                    function r() {
                        this.constructor = t
                    }
                    n(t, i);
                    t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
                }
            }(),
            h = function() {
                function t(t, i, r, u, f, e) {
                    var o,
                        s,
                        h,
                        a;
                    if (u === void 0 && (u = 256), f === void 0 && (f = 256), e === void 0 && (e = l.instance), n.assertIsInteger(t, "x"), n.assertIsInteger(i, "y"), n.assertIsInteger(r, "zoom"), n.assertIsInteger(u, "width"), n.assertIsInteger(f, "height"), o = 1 << r, lt.tileRefactoringEnabled || !(t < 0) && !(i < 0) && !(t >= o) && !(i >= o)) {
                        this.x = t;
                        this.y = i;
                        this.zoom = r;
                        this.pixelWidth = u;
                        this.pixelHeight = f;
                        this.crs = e;
                        s = (e.bounds[1] - e.bounds[3]) / o;
                        h = (e.bounds[2] - e.bounds[0]) / o;
                        this.bounds = [e.bounds[0] + h * i, e.bounds[3] + s * t + s, e.bounds[0] + h * i + h, e.bounds[3] + s * t, ];
                        var c = "",
                            v = t,
                            y = i;
                        for (a = 0; a < r; a++)
                            c = ((v & 1) + 2 * (y & 1)).toString() + c, v >>= 1, y >>= 1;
                        this.quadKey = c;
                        this._stringValue = e.id + "PryamidTile" + c
                    }
                }
                return t.prototype.getParent = function() {
                    var n = null;
                    return this.zoom > 1 && (n = new t(Math.floor(this.x / 2), Math.floor(this.y / 2), this.zoom - 1)), n
                }, t.prototype.toString = function() {
                    return this._stringValue
                }, t.fromQuadKey = function(n, i, r, u) {
                    var f,
                        o,
                        s;
                    u === void 0 && (u = l.instance);
                    var h = 0,
                        c = 0,
                        e = n.length;
                    for (f = e; f > 0; f--)
                        o = 1 << f - 1, s = n.charCodeAt(e - f) - 48, s & 1 && (h |= o), s & 2 && (c |= o);
                    return new t(h, c, e, i, r, u)
                }, t.areEqual = function(n, t) {
                    return n && t && n.quadKey === t.quadKey && n.crs === t.crs
                }, t
            }(),
            g = function(t) {
                function r(n, r, u, f, e, s) {
                    var h = this,
                        c = {},
                        a,
                        y,
                        p,
                        v,
                        l;
                    for (h = t.call(this, c) || this, h._minZoom = u.minZoom, h._maxZoom = u.maxZoom, h._tileWidth = u.tileWidth, h._tileHeight = u.tileHeight, h._wrapping = u.wrapping, h._tileCache = e, a = n.getConfig(), h._tileFlickerFix = a.tileFlickerFix, h._showBackgroundGrids = a.showBackgroundGrids, h._roundTileLod = a.roundTileLod, h._allowLoadingNewTiles = !0, h._disposables = [], h._grids = {}, h._tileFactory = r, h.renderInvalidated = new o, h.onFrameRendered = new o, h.onFrameFailed = new o, h._currentUpdateReason = 2, h._map = n, h._crs = f, y = i.Internal, a = y && y._CoreConfig && y._CoreConfig(), p = n.getZoomOffset(), h._maxZoom -= p, h.defaultBackgroundGridLevel = h._minZoom, v = h._minZoom; v <= h._maxZoom; v++)
                        l = new w(h, v, p, s, h._tileFlickerFix), h._grids[v] = l, h._disposables.push(l.changed.add(function(n) {
                            return h._onGridChanged(n)
                        }), l.onFrameRendered.add(function(n) {
                            return h.onFrameRendered.invoke(n)
                        }), l.onFrameFailed.add(function(n) {
                            return h.onFrameFailed.invoke(n)
                        }), l);
                    return h._defaultBackgroundGrid = h._grids[h.defaultBackgroundGridLevel], c.defineProperty("center", null, null, {
                        defaultValue: {
                            x: 0,
                            y: 0
                        }
                    }), c.defineProperty("viewportSize", null, null, {
                        defaultValue: {
                            width: 0,
                            height: 0
                        }
                    }), c.defineProperty("zoom", function(n, t) {
                        return h._onZoomChanged(n, t)
                    }, function(n, t) {
                        return h._onZoomChangedTypeConverter(n, t)
                    }, {
                        defaultValue: 0
                    }), c.defineProperty("percentLoaded", null, null, {
                        defaultValue: 0
                    }), c.defineProperty("heading", null, null, {
                        defaultValue: 0
                    }), c.defineProperty("opacity", null, null, {
                        defaultValue: 1
                    }), h
                }
                return y(r, t), r.prototype.getCurrentGrid = function() {
                    return this._currentGrid
                }, r.prototype.clearTileCache = function(n, t) {
                    w.clearTileCache(this._map.getId(), t);
                    n && this._currentGrid && this._currentGrid.resetTiles()
                }, r.prototype.updateTileCacheSize = function() {
                    var n = this.getCrs().tileInfo,
                        t = n && n.tileHeight,
                        i = n && n.tileWidth;
                    this.getTileCache().updateTileCacheSize(t, i);
                    w.updateBackgroundTileCacheSize(t, i)
                }, r.prototype.getTileCache = function() {
                    return this._tileCache
                }, r.prototype.getCrs = function() {
                    return this._crs
                }, r.prototype.setCrs = function(n) {
                    this._crs = n
                }, r.prototype.getWrapping = function() {
                    return this._wrapping
                }, r.prototype.getMinZoom = function() {
                    return this._minZoom
                }, r.prototype.getMaxZoom = function() {
                    return this._maxZoom
                }, r.prototype.getTileWidth = function() {
                    return this._tileWidth
                }, r.prototype.getTileHeight = function() {
                    return this._tileHeight
                }, r.prototype.getTileFactory = function() {
                    return this._tileFactory
                }, r.prototype.getMap = function() {
                    return this._map
                }, r.prototype.setFrame = function(n) {
                    var t = this;
                    this._targetGrid && (this._targetGrid.setFrame(n), this._tileFlickerFix ? Microsoft.Maps.setTimeout(function() {
                        t._map && !t._map.isDisposed() && t._targetGrid.update()
                    }, 0) : this._targetGrid.update())
                }, r.prototype.setCurrentUpdateReason = function(n) {
                    this._currentUpdateReason = n;
                    this._roundTileLod ? this.activateTargetGrid() : n === 1 ? this._allowLoadingNewTiles = !1 : n === 2 && (this._allowLoadingNewTiles = !0, this._tileFlickerFix && this.activateTargetGrid())
                }, r.prototype.render = function(t) {
                    var e,
                        h;
                    n.logDebugData("TilePyramid : render");
                    n.groupCollapsed(null, "Rendering TilePyramid with tileplacement");
                    n.logObject(null, "Current grid", this._currentGrid);
                    n.logObject(null, "Target grid", this._targetGrid);
                    var i = this._targetGrid,
                        f = i && i.getIsActive() && i.getOpacity() > 0,
                        o = f && i.getPercentLoaded() > r.minQualityBar,
                        u = !(f && i.getPercentGood() > r.minQualityBar),
                        s = o && u;
                    (u || this._currentGrid && (!i.getIsActive() || i.getOpacity() < 1 || i.getPercentGood() < 1 || i.getPercentLoaded() < 1)) && ((u || this._currentGrid.zoom >= i.zoom) && (e = !1, this._showBackgroundGrids && this._defaultBackgroundGrid && i && this._defaultBackgroundGrid.zoom <= i.zoom && (this._defaultBackgroundGrid.setOpacity(1), this._defaultBackgroundGrid.render(t, !1), this._defaultBackgroundGrid.getPercentGood() === 1 && (e = !0)), e || this._currentUpdateReason === 2 || t.clear(), this._findBestBackgroundGrid(s), n.logObject(null, "Background grid", this._bestBackgroundGrid), this._bestBackgroundGrid && (this._bestBackgroundGrid.setOpacity(1), this._bestBackgroundGrid.setIsBackground(!0), this._bestBackgroundGrid.render(t, s))), this._currentGrid && (u || i !== this._currentGrid) && (this._currentGrid.setOpacity(1), this._currentGrid.setIsBackground(!1), this._currentGrid.render(t, this._tileFlickerFix && this._allowLoadingNewTiles && this._currentGrid === i)));
                    h = this._tileFlickerFix ? f : o;
                    (!this._showBackgroundGrids || h) && i && (i.setIsBackground(!1), i.render(t, this._allowLoadingNewTiles));
                    n.groupEnd()
                }, r.prototype.dispose = function() {
                    t.prototype.dispose.call(this);
                    u._clearDisposables(this._disposables)
                }, r.prototype.getTile = function(n, t, i, r) {
                    n = Math.floor(n);
                    t = Math.floor(t);
                    i = Math.floor(i);
                    var u = this._grids[i];
                    return u ? u.getTile(n, t, r) : null
                }, r.prototype.activateTargetGrid = function() {
                    !this._targetGrid || this._tileFlickerFix && (this._targetGrid.getIsActive() === null && u._isFeatureEnabled("bE2Labels") || this._targetGrid.getIsActive()) || (this._targetGrid.setIsActive(!0), this._targetGrid.setOpacity(this._currentGrid && this._currentGrid.getPercentGood() === 1 ? 0 : 1), n.log(null, "Target grid opacity set to {0}", this._targetGrid.getOpacity().toString()), n.group(null, "Updating target grid at zoom : {0}", this._targetGrid.zoom.toString()), this._targetGrid.update(), n.groupEnd())
                }, r.prototype._onZoomChanged = function(n, t) {
                    var i,
                        r;
                    this._roundTileLod ? (this._currentUpdateReason === 1 ? (this._currentZoom && Math.abs(this._currentZoom - t) > .1 || n === 0 && t > 0 && u._isFeatureEnabled("bE2Labels")) && (r = !0) : r = !0, r && (i = Math.min(Math.round(t), this._maxZoom), this._currentLod = i, this._currentZoom = t, this._setTargetGrid(this._grids[i]), this.activateTargetGrid())) : (i = Math.abs(t - n) < 1 ? Math.min(t > n ? Math.floor(n) + 1 : Math.floor(n), this._maxZoom) : Math.min(Math.round(t), this._maxZoom), this._setTargetGrid(this._grids[i]), this._currentUpdateReason === 2 && this.activateTargetGrid())
                }, r.prototype._onZoomChangedTypeConverter = function(n, t) {
                    return n === t && this._currentUpdateReason === 2 && this.activateTargetGrid(), n
                }, r.prototype._onGridChanged = function(n) {
                    switch (n.name) {
                    case "percentLoaded":
                        this._updatePercentLoaded();
                        n.sender.getOpacity() > 0 && this.renderInvalidated.invoke();
                        break;
                    case "opacity":
                        this.renderInvalidated.invoke()
                    }
                }, r.prototype._onGridFrameRendered = function(n) {
                    this.onFrameRendered.invoke(n)
                }, r.prototype._updatePercentLoaded = function(n) {
                    if (n === void 0 && (n = !0), this._targetGrid) {
                        var t = this._targetGrid.getPercentLoaded(),
                            i = this._targetGrid.getPercentGood();
                        this.setPercentLoaded(t);
                        t >= r._loadedPercentCutoff && n && i >= r.minQualityBar && this._trasitionToTargetGrid()
                    } else
                        this.setPercentLoaded(0)
                }, r.prototype._setTargetGrid = function(t) {
                    n.assertNotNull(t, "newGrid");
                    this._targetGrid !== t && (this._targetGrid && this._targetGrid.setIsActive(!1), n.log(null, "Pyramid zoom changed, newGrid zoom:{0}, oldTarget zoom:{1}", t.zoom.toString(), this._targetGrid ? this._targetGrid.zoom.toString() : "-1"), this._targetGrid = t, this._updatePercentLoaded(!1))
                }, r.prototype.prefetchBackgroundGrids = function() {
                    this._showBackgroundGrids && (this._defaultBackgroundGrid.getIsBackground() || (this._defaultBackgroundGrid.setIsBackground(!0), this._defaultBackgroundGrid.setOpacity(1)), this._targetGrid.zoom >= this._defaultBackgroundGrid.zoom && this._defaultBackgroundGrid.update(), this._updateAssignedBackgroundGrid(), this._assignedBackgroundGrid.zoom !== this._defaultBackgroundGrid.zoom && this._assignedBackgroundGrid.update())
                }, r.prototype._updateAssignedBackgroundGrid = function() {
                    var t = Math.max(this._targetGrid.zoom - r._assignedBackgroundGridDistance, this._minZoom),
                        n = this._grids[t];
                    (!this._assignedBackgroundGrid || this._assignedBackgroundGrid && this._assignedBackgroundGrid.zoom !== n.zoom) && (this._assignedBackgroundGrid && (this._assignedBackgroundGrid && this._assignedBackgroundGrid.setIsBackground(!1), this._assignedBackgroundGrid !== this._targetGrid && this._assignedBackgroundGrid.setOpacity(0)), this._assignedBackgroundGrid = n, this._assignedBackgroundGrid.setIsBackground(!0), this._assignedBackgroundGrid.setOpacity(1))
                }, r.prototype._trasitionToTargetGrid = function() {
                    var o = this,
                        f,
                        e;
                    n.assertNotNull(this._targetGrid, "targetGrid");
                    n.assert(this._targetGrid.getPercentLoaded() >= r._loadedPercentCutoff, "Target grid is not yet loaded");
                    var i = this._currentGrid,
                        t = this._targetGrid,
                        u = t.getOpacity();
                    i && i !== t && u !== 1 ? (f = function() {
                        i.setIsActive(!1);
                        o._currentGrid = t
                    }, this._map.getMapOptions().disableCrossfade ? (f(), t.setOpacity(1)) : u < 1 && (!this._tileFlickerFix || !b.hasAnimation(t, "opacity")) && (e = (1 - u) * r._crossFadeAnimationDuration, b.animate(t, "opacity", {
                        to: 1,
                        onComplete: f,
                        duration: e
                    }))) : (this._currentGrid = t, t.setOpacity(1))
                }, r.prototype._findBestBackgroundGrid = function(t) {
                    var u,
                        f,
                        e,
                        i,
                        o;
                    if (this._bestBackgroundGrid = null, this._targetGrid && this._showBackgroundGrids)
                        if (u = Math.max(this._minZoom, this._defaultBackgroundGrid ? this._defaultBackgroundGrid.zoom + 1 : 0), f = this._targetGrid.getIsActive() ? this._targetGrid.zoom - 1 : this._targetGrid.zoom, f <= u && (u = this._minZoom), t)
                            this._bestBackgroundGrid = this._grids[f];
                        else
                            for (e = f; e >= u; e--) {
                                if (i = this._grids[e], n.groupCollapsed(null, "Trying to find best background grid: {0}", i.zoom.toString()), o = i.getPercentLoaded(), o >= r._loadedPercentCutoff && i.getPercentGood() >= r.minQualityBar || this._assignedBackgroundGrid && i.zoom === this._assignedBackgroundGrid.zoom) {
                                    this._bestBackgroundGrid = i;
                                    n.log(null, "Best background grid zoom set to : {0}", this._bestBackgroundGrid.zoom.toString());
                                    n.groupEnd();
                                    break
                                }
                                n.groupEnd()
                            }
                    this._bestBackgroundGrid && this._bestBackgroundGrid.setOpacity(1)
                }, r._loadedPercentCutoff = .8, r.minQualityBar = .8, r._assignedBackgroundGridDistance = 4, r._crossFadeAnimationDuration = 300, r
            }(a),
            at = function() {
                function t(n, i) {
                    this.hitTestPriority = 2;
                    this._canvas = u._createElement("canvas");
                    this._canvas.set_attr("id", "tileCanvasId");
                    this._canvas.set_style({
                        outline: "none",
                        position: "absolute"
                    });
                    this._canvas[0].style.backgroundColor = n.getMapOptions().backgroundColor || t._userCanvasBackgroundColor;
                    this._canvasElem = this._canvas[0];
                    this._context = this._canvasElem.getContext("2d");
                    this._hitTestController = i;
                    this._dpiScale = n.getDpiScale();
                    i.addComponent(this)
                }
                return t.prototype.beginFrame = function(n) {
                    var r = n.width,
                        u = n.height,
                        t = this._canvasElem,
                        i = this._dpiScale;
                    (t.width !== r * i || t.height !== u * i) && (t.width = r * i, t.height = u * i, t.style.width = r + "px", t.style.height = u + "px");
                    this._state = []
                }, t.prototype.clear = function() {
                    var n = this._canvasElem;
                    this._context.clearRect(0, 0, n.width, n.height)
                }, t.prototype.beginGrid = function(n, t, i) {
                    this._context.save();
                    this._context.globalAlpha = t;
                    var r = Math.floor(this._canvasElem.width / 2),
                        u = Math.floor(this._canvasElem.height / 2);
                    this._context.translate(r, u);
                    this._context.rotate(i);
                    this._state.push({
                        tiles: [],
                        xOffset: r,
                        yOffset: u,
                        angle: i
                    })
                }, t.prototype.placeTile = function(n, t, i, r, u) {
                    this._state[this._state.length - 1].tiles.push({
                        tile: n,
                        x: t,
                        y: i,
                        width: r,
                        height: u
                    });
                    this._context.drawImage(n.getRootElement()[0], t, i, r, u)
                }, t.prototype.endGrid = function() {
                    this._context.restore()
                }, t.prototype.endFrame = function() {}, t.prototype.dispose = function() {
                    this._state = [];
                    this._hitTestController && (this._hitTestController.removeComponent(this), this._hitTestController = null);
                    this._canvas && this._canvas.clear();
                    this._canvas = null;
                    this._canvasElem = null
                }, t.prototype.getRootElement = function() {
                    return this._canvas
                }, t.prototype.performHitTesting = function(t, i) {
                    var h,
                        c,
                        l;
                    if (this._state)
                        for (h = this._state.length; h--;) {
                            var u = this._state[h],
                                a = u.tiles.length,
                                v = this._dpiScale,
                                o = v * i.x - u.xOffset,
                                s = v * i.y - u.yOffset;
                            if (u.angle) {
                                var y = Math.sin(-u.angle),
                                    p = Math.cos(-u.angle),
                                    w = o * p - s * y,
                                    b = o * y + s * p;
                                o = w;
                                s = b
                            }
                            while (a--) {
                                var r = u.tiles[a],
                                    f = o - r.x,
                                    e = s - r.y;
                                if (f >= 0 && e >= 0 && f < r.width && e < r.height) {
                                    c = r.tile.tileId.pixelHeight;
                                    l = r.tile.tileId.pixelWidth;
                                    n.assertNotNull(c, "actual tile height");
                                    n.assertNotNull(l, "actual tile width");
                                    f = f * l / r.width;
                                    e = e * c / r.height;
                                    r.tile.hitTest(f, e, t);
                                    return
                                }
                            }
                        }
                }, t._userCanvasBackgroundColor = "#EBE9E2", t
            }(),
            nt = function() {
                function n(n) {
                    this.key = n;
                    this._root = u._createElement("div").set_style({
                        position: "relative"
                    });
                    this._unusedPropertyName = n + "unused"
                }
                return n.getGridKey = function(t) {
                    var i = t[n._gridKeyPropertyName];
                    return i || (i = t[n._gridKeyPropertyName] = (n._gridIndex++).toString()), i
                }, n.prototype.begin = function() {
                    for (var n = this._root[0].firstChild; n;)
                        n[this._unusedPropertyName] = !0, n = n.nextSibling
                }, n.prototype.placeTile = function(n, t, i, r, u) {
                    var f = n.getRootElement(),
                        e = f[0];
                    e[this._unusedPropertyName] = !1;
                    f.set_style({
                        transform: "translate(" + t + "px," + i + "px)",
                        width: r,
                        height: u
                    });
                    e.parentNode || (f.set_style({
                        position: "absolute",
                        top: 0,
                        left: 0
                    }), this._root.append(e))
                }, n.prototype.end = function() {
                    for (var t = this._root[0], n = t.firstChild; n;)
                        n[this._unusedPropertyName] === !0 && t.removeChild(n), n = n.nextSibling
                }, n.prototype.transform = function(n, t, i, r) {
                    t = Math.floor(t);
                    i = Math.floor(i);
                    this._root.set_style({
                        opacity: n,
                        transform: "translate(" + t + "px," + i + "px) rotate(" + r + "rad)"
                    })
                }, n.prototype.getRootElement = function() {
                    return this._root
                }, n._gridIndex = 0, n._gridKeyPropertyName = "mm$gridKey", n
            }(),
            vt = function() {
                function n() {
                    this._root = u._createElement("div");
                    this._gridPlacements = {}
                }
                return n.prototype.beginFrame = function(n) {
                    for (var t in this._gridPlacements)
                        this._gridPlacements[t] && this._gridPlacements.hasOwnProperty(t) && (this._gridPlacements[t].unused = !0);
                    this._size = n
                }, n.prototype.beginGrid = function(n, t, i) {
                    var u = nt.getGridKey(n),
                        r = this._gridPlacements[u];
                    r || (r = this._gridPlacements[u] = new nt(u), this._root.append(r.getRootElement()));
                    this._currentGrid = r;
                    r.unused = !1;
                    r.begin();
                    r.transform(t, this._size.width / 2, this._size.height / 2, i)
                }, n.prototype.placeTile = function(n, t, i, r, u) {
                    this._currentGrid.placeTile(n, t, i, r, u)
                }, n.prototype.endGrid = function() {
                    this._currentGrid.end()
                }, n.prototype.endFrame = function() {
                    var n,
                        t;
                    for (n in this._gridPlacements)
                        this._gridPlacements[n] && this._gridPlacements.hasOwnProperty(n) && (t = this._gridPlacements[n], t.unused && (t.getRootElement().removeFromParent(), this._gridPlacements[n] = null))
                }, n.prototype.clear = function() {}, n.prototype.getRootElement = function() {
                    return this._root
                }, n
            }(),
            r = function() {
                function n() {}
                return n.getLodFromGroundResolution = function(n, t, i) {
                    var u = Math.cos(t * e.radiansPerDegree) * 156543.04,
                        r = e.log2(u / n);
                    return r = Math.round(r), Math.max(r - i, 1)
                }, n.getTileIdFromLocation = function(t, i, r) {
                    var u = n.latLongToPixelXY(t, i);
                    return r && (u.x += r.x, u.y += r.y), n.pixelXYToTileXY(u)
                }, n.clip = function(n, t, i) {
                    return Math.min(Math.max(n, t), i)
                }, n.getMapSize = function(t) {
                    return n.tileLength << t
                }, n.latLongToPixelXY = function(t, i) {
                    var e = n.clip(t.latitude, n.minLatitude, n.maxLatitude),
                        o = c.normalizeLongitude(t.longitude),
                        s = (o + 180) / 360,
                        u = Math.sin(e * Math.PI / 180),
                        h = .5 - Math.log((1 + u) / (1 - u)) / (4 * Math.PI),
                        r = n.getMapSize(i),
                        l = Math.floor(n.clip(s * r + .5, 0, r - 1)),
                        a = Math.floor(n.clip(h * r + .5, 0, r - 1));
                    return new f(l, a)
                }, n.pixelXYToTileXY = function(t) {
                    var i = Math.floor(t.x / n.tileLength),
                        r = Math.floor(t.y / n.tileLength);
                    return new f(i, r)
                }, n.pixelXYToTile = function(t, i) {
                    var r = Math.floor(t.x / n.tileLength),
                        u = Math.floor(t.y / n.tileLength);
                    return new h(r, u, i, n.tileLength, n.tileLength, l.instance)
                }, n.tileXYToPixelXY = function(t) {
                    var i = t.x * n.tileLength,
                        r = t.y * n.tileLength;
                    return new f(i, r)
                }, n.tileToPixelXY = function(t) {
                    var i = t.x * n.tileLength,
                        r = t.y * n.tileLength;
                    return new f(i, r)
                }, n.pixelXYToLatLong = function(t, i) {
                    var r = n.getMapSize(i),
                        u = n.clip(t.x, 0, r - 1) / r - .5,
                        f = .5 - n.clip(t.y, 0, r - 1) / r,
                        e = 90 - 360 * Math.atan(Math.exp(-f * 2 * Math.PI)) / Math.PI,
                        o = 360 * u;
                    return new c(e, o)
                }, n.quadKeyToLocationRect = function(t) {
                    var i = t.length,
                        r = n.quadKeyToTileXY(t),
                        u = r.x * n.tileLength,
                        e = r.y * n.tileLength,
                        o = u + n.tileLength,
                        s = e + n.tileLength;
                    return st.fromCorners(n.pixelXYToLatLong(new f(u, e), i), n.pixelXYToLatLong(new f(o, s), i))
                }, n.quadKeyToTileXY = function(n) {
                    for (var t, r = 0, u = 0, e = n.length, i = e; i > 0; i--) {
                        t = 1 << i - 1;
                        switch (n[e - i]) {
                        case "0":
                            break;
                        case "1":
                            r |= t;
                            break;
                        case "2":
                            u |= t;
                            break;
                        case "3":
                            r |= t;
                            u |= t;
                            break;
                        default:
                            throw "Invalid QuadKey digit sequence.";
                        }
                    }
                    return new f(r, u)
                }, n.tileLength = 256, n.minLatitude = -85.05112878, n.maxLatitude = 85.05112878, n.minLongitude = -180, n.maxLongitude = 180, n
            }(),
            tt = function() {
                function t(n) {
                    this._lodOffset = n ? n : 0
                }
                return t.prototype.getRegionsInBounds = function(n, i, u, f) {
                    u === void 0 && (u = r.tileLength);
                    var e = i - .001 * i,
                        o = t._getLodFromScale(e, this._lodOffset);
                    return t._getRegionsInternal(n, o, u, f)
                }, t.prototype.getRegions = function(n, i, u, f) {
                    u === void 0 && (u = r.tileLength);
                    var e = r.getLodFromGroundResolution(i, n.center.latitude, this._lodOffset);
                    return t._getRegionsInternal(n, e, u, f)
                }, t._getLodFromScale = function(n, i) {
                    for (var u, f = t._scaleToLod.length, r = 0; r < f; r++)
                        if (u = t._scaleToLod[r], n <= u.scale)
                            return Math.max(u.lod - i, 1)
                }, t._getRegionsInternal = function(t, u, e, o) {
                    var l,
                        y,
                        a;
                    n.assertIsInteger(u, "lod");
                    var s = r.getTileIdFromLocation(t.getNorthwest(), u, new f(1, 1)),
                        c = r.getTileIdFromLocation(t.getSoutheast(), u, new f(-1, -1)),
                        p = [],
                        v = r.getMapSize(u) / e,
                        w = s.x <= c.x ? c.x - s.x + 1 : v + c.x - s.x + 1;
                    for (t.crossesInternationalDateLine() && t.width >= 180 && s.x === c.x && (w = v), l = s.x, y = 0; y < w; y++) {
                        for (l === v && (l = 0), a = s.y; a <= c.y; a++)
                            p.push(new h(l, a, u, e, e, o ? o : i.MercatorCubeCrs.instance));
                        l++
                    }
                    return p
                }, t._scaleToLod = [{
                    scale: .0187,
                    lod: 23
                }, {
                    scale: .0373,
                    lod: 22
                }, {
                    scale: .0746,
                    lod: 21
                }, {
                    scale: .1493,
                    lod: 20
                }, {
                    scale: .2986,
                    lod: 19
                }, {
                    scale: .5972,
                    lod: 18
                }, {
                    scale: 1.1943,
                    lod: 17
                }, {
                    scale: 2.3887,
                    lod: 16
                }, {
                    scale: 4.7773,
                    lod: 15
                }, {
                    scale: 9.5546,
                    lod: 14
                }, {
                    scale: 19.1093,
                    lod: 13
                }, {
                    scale: 38.2185,
                    lod: 12
                }, {
                    scale: 76.437,
                    lod: 11
                }, {
                    scale: 152.8741,
                    lod: 10
                }, {
                    scale: 305.7481,
                    lod: 9
                }, {
                    scale: 611.4962,
                    lod: 8
                }, {
                    scale: 1222.9925,
                    lod: 7
                }, {
                    scale: 2445.9849,
                    lod: 6
                }, {
                    scale: 4891.9698,
                    lod: 5
                }, {
                    scale: 9783.9396,
                    lod: 4
                }, {
                    scale: 19567.8792,
                    lod: 3
                }, {
                    scale: 39135.7585,
                    lod: 2
                }, {
                    scale: Number.POSITIVE_INFINITY,
                    lod: 1
                }], t
            }(),
            it = function() {
                function n(n, t, i, r) {
                    this.image = n;
                    this.cacheKey = t;
                    this.tileRegion = i;
                    this.requestedRegion = r || i
                }
                return n
            }(),
            rt = function() {
                function t() {}
                return t.addTile = function(i, r) {
                    n.assertNotNull(i, "tile");
                    i && (r ? t._sharedBackgroundCache.addItem(i.cacheKey, i) : t._sharedCache.addItem(i.cacheKey, i))
                }, t.getTile = function(n, i) {
                    return i ? t._sharedBackgroundCache.getItem(n) : t._sharedCache.getItem(n) || t._sharedBackgroundCache.getItem(n)
                }, t.getBackgroundTile = function(n, i) {
                    var r;
                    return r = i ? t._sharedBackgroundCache.getInternalDictionary()[n] : t._sharedCache.getInternalDictionary()[n] || t._sharedBackgroundCache.getInternalDictionary()[n], r && r.item
                }, t._sharedCacheSize = 256, t._sharedBackgroundCacheSize = 64, t._sharedCache = new s(t._sharedCacheSize), t._sharedBackgroundCache = new s(t._sharedBackgroundCacheSize), t
            }(),
            ut = function() {
                function n(n) {
                    this._quadKey = n.quadKey;
                    this.id = "sheetcrs-" + n.quadKey;
                    this._tileXY = r.quadKeyToTileXY(n.quadKey);
                    this.bounds = n.bounds
                }
                return n.prototype.projectToX = function(t, i) {
                    var u = this._getSheetLod(),
                        f = new c(t, i),
                        e = r.latLongToPixelXY(f, u),
                        o = r.tileXYToPixelXY(this._tileXY),
                        s = n._maxValue / 256;
                    return (e.x - o.x) * s
                }, n.prototype.projectToY = function(t, i) {
                    var u = this._getSheetLod(),
                        f = new c(t, i),
                        e = r.latLongToPixelXY(f, u),
                        o = r.tileXYToPixelXY(this._tileXY),
                        s = n._maxValue / 256;
                    return (e.y - o.y) * s
                }, n.prototype.toLatitude = function(t, i) {
                    var s = this._getSheetLod(),
                        u = new f(this._tileXY.x, this._tileXY.y),
                        e,
                        o;
                    return u.x += t / n._maxValue, u.y += i / n._maxValue, e = r.tileXYToPixelXY(u), o = r.pixelXYToLatLong(e, s), o.latitude
                }, n.prototype.toLongitude = function(t, i) {
                    var s = this._getSheetLod(),
                        u = new f(this._tileXY.x, this._tileXY.y),
                        e,
                        o;
                    return u.x += t / n._maxValue, u.y += i / n._maxValue, e = r.tileXYToPixelXY(u), o = r.pixelXYToLatLong(e, s), o.longitude
                }, n.prototype._getSheetLod = function() {
                    return this._quadKey.length
                }, n.prototype._getTileLod = function() {
                    return this._getSheetLod() + 1
                }, n._maxValue = 512, n
            }(),
            p = function() {
                function n(n) {
                    this.quadKey = n;
                    this.lod = n.length;
                    this.crs = new ut(this);
                    this.bounds = this.crs.bounds
                }
                return n
            }(),
            yt = function() {
                function n() {
                    this._pyramidTileSpatialIndex = new tt(1)
                }
                return n.prototype.getRegionsInBounds = function(n, t) {
                    for (var f, e, r = [], u = this._pyramidTileSpatialIndex.getRegionsInBounds(n, t), i = 0; i < u.length; i++)
                        f = u[i].quadKey, e = new p(f), r.push(e);
                    return r
                }, n.prototype.getRegions = function(n, t) {
                    for (var f, e, r = [], u = this._pyramidTileSpatialIndex.getRegions(n, t), i = 0; i < u.length; i++)
                        f = u[i].quadKey, e = new p(f), r.push(e);
                    return r
                }, n
            }(),
            ft = function() {
                function t(i) {
                    this._maxSharedCacheSize = 256;
                    this._minSharedCacheSize = 128;
                    this._tileSize = 65536;
                    this._cachingMultiplier = 8;
                    n.assertNotNull(i, "map");
                    this._map = i;
                    var r = this._getTileCacheSize();
                    t._sharedCache ? t._sharedCache.setCapacity(r) : t._sharedCache = new s(r)
                }
                return t.prototype.addTile = function(i) {
                    n.assertNotNull(i, "tile");
                    var r = this._getKey(i.tileId);
                    t._sharedCache.addItem(r, i)
                }, t.prototype.getTile = function(n) {
                    var i = this._getKey(n);
                    return t._sharedCache.getItem(i)
                }, t.prototype.updateTileCacheSize = function(n, i) {
                    if (t._sharedCache) {
                        var r = this._getTileCacheSize(n, i);
                        t._sharedCache.setCapacity(r)
                    }
                }, t.clear = function(n) {
                    var r,
                        u;
                    if (t._sharedCache) {
                        r = t._sharedCache.getInternalDictionary();
                        for (u in r) {
                            var i = t._sharedCache.getItem(u),
                                f = i && i.getMap && i.getMap(),
                                e = f && f.getId() !== n;
                            !e && i && i.dispose && i.dispose()
                        }
                        t._sharedCache.clear()
                    }
                }, t.prototype._getTileCacheSize = function(n, i) {
                    var r = t._sharedCacheSize,
                        f = typeof n == "number" && typeof i == "number" ? n * i : this._tileSize,
                        s = u._isFeatureEnabled("bE2Labels") ? f / this._tileSize : 1,
                        e = this._map.getActualSize(),
                        o = Math.ceil(this._map.getDpiScale()),
                        h = o > 1 ? Math.pow(2, o) : 1;
                    return r = Math.min(Math.ceil(e.height * e.width / f) * h * this._cachingMultiplier, this._maxSharedCacheSize), Math.max(this._minSharedCacheSize / s, r)
                }, t.prototype._getKey = function(n) {
                    var t = n.quadKey,
                        i = n.crs;
                    return t += "_" + i.id, i.version && (t += "_" + i.version), this._map.getAllLayers().hasUserLayers() && (t += "_" + this._map.getId()), t
                }, t._sharedCacheSize = 256, t
            }(),
            w = function(t) {
                function i(n, r, u, f, e) {
                    var h = this,
                        c = {};
                    return h = t.call(this, c) || this, h._currentTiles = {}, h._pendingTiles = {}, h._currentTileChangedHandlers = {}, h._tilePyramid = n, h.zoom = r, h._zoomOffset = u, h._appliedZoom = r + u, h._tileCount = Math.pow(2, h._appliedZoom), h._width = h._tileCount * n.getTileWidth(), h._height = h._tileCount * n.getTileHeight(), h._workDispatcher = f, h._tileFlickerFix = e, h.onFrameRendered = new o, h.onFrameFailed = new o, i._backgroundTileCache || (i._backgroundTileCache = new s(i._getBackgroundTileCacheSize())), h._pyramidTileIdCache = new s(256), c.defineProperty("percentLoaded", function(n, t) {
                        return h._onPercentLoadedChanged(n, t)
                    }, null, {
                        defaultValue: 0
                    }), c.defineProperty("opacity", null, null, {
                        defaultValue: 0
                    }), c.defineProperty("isActive", function(n, t) {
                        return h._onIsActiveChanged(n, t)
                    }), c.defineProperty("isBackground", null, null, {
                        defaultValue: !1
                    }), h
                }
                return y(i, t), i.clearTileCache = function(n, t) {
                    var r,
                        u,
                        f;
                    t || ft.clear(n);
                    r = i._backgroundTileCache.getInternalDictionary();
                    for (u in r)
                        r.hasOwnProperty(u) && (f = r[u].item, f.dispose());
                    i._backgroundTileCache.clear()
                }, i.updateBackgroundTileCacheSize = function(n, t) {
                    if (i._backgroundTileCache) {
                        var r = i._getBackgroundTileCacheSize(n, t);
                        i._backgroundTileCache.setCapacity(r)
                    }
                }, i._getBackgroundTileCacheSize = function(n, t) {
                    var r = typeof n == "number" && typeof t == "number" ? n * t : i._tileSize;
                    return Math.ceil(i._backgroundCacheSize * i._tileSize / r)
                }, i.prototype.getPercentGood = function() {
                    return this._percentGood
                }, i.prototype.setFrame = function(n) {
                    this._currentFrame = n;
                    this._hasRenderedCurrentFrame = !1;
                    this._invokeFrameFailedEventWhenFrameAvailable && this._currentFrame && (this._invokeFrameFailedEventWhenFrameAvailable = !1, this._invokeFrameFailedEvent())
                }, i.prototype.update = function() {
                    this._render(null)
                }, i.prototype.render = function(n, t) {
                    t === void 0 && (t = !0);
                    this._render(n, t)
                }, i.prototype._render = function(t, r) {
                    var ni = this,
                        ht,
                        it,
                        y,
                        ft,
                        rt,
                        w,
                        b,
                        hi,
                        p,
                        et,
                        gt;
                    r === void 0 && (r = !0);
                    n.groupCollapsed(null, "Render Grid with zoom: {0}", this.zoom.toString());
                    n.time("Grid Render");
                    var s = this.getIsActive(),
                        k = this.getIsBackground(),
                        ti = this._tilePyramid.getZoom(),
                        ii = Math.pow(2, ti - this.zoom),
                        ri = this._tilePyramid.getViewportSize() || v.Auto,
                        ui = Math.pow(2, this._zoomOffset),
                        ot = ri.width * ui,
                        st = ri.height * ui;
                    if (!(st <= 0) && !(ot <= 0) && (!(this.zoom < this._tilePyramid.defaultBackgroundGridLevel) || s || !k || t)) {
                        s || !k || t || (ht = this.zoom !== this._tilePyramid.defaultBackgroundGridLevel ? Math.pow(2, i._backgroundGridViewportExpansionFactor) : Math.pow(2, Math.min(Math.max(ti - this._tilePyramid.defaultBackgroundGridLevel, 0), i._defaultBackgroundGridViewportExpansionFactor)), st *= ht, ot *= ht);
                        var f = Math.round(this._tilePyramid.getTileWidth() * ii),
                            o = Math.round(this._tilePyramid.getTileHeight() * ii),
                            fi = this._tilePyramid.getCenter(),
                            ct = Math.round(f * this._tileCount * fi.x),
                            lt = Math.round(o * this._tileCount * fi.y),
                            ut = e.degreesToRadians(this._tilePyramid.getHeading()),
                            h = Math.cos(ut),
                            c = Math.sin(ut),
                            l = ot / 2,
                            a = st / 2,
                            at = -l * h - -a * c,
                            vt = -l * c + -a * h,
                            yt = l * h - a * c,
                            pt = l * c + a * h,
                            wt = at,
                            bt = vt,
                            kt = yt,
                            dt = pt;
                        ut && (wt = l * h - -a * c, bt = l * c + -a * h, kt = -l * h - a * c, dt = -l * c + a * h);
                        var ci = ct + Math.min(at, yt, wt, kt),
                            li = lt + Math.min(vt, pt, bt, dt),
                            ai = ct + Math.max(at, yt, wt, kt) - 1,
                            vi = lt + Math.max(vt, pt, bt, dt) - 1,
                            d = Math.floor(ci / f),
                            g = Math.floor(li / o),
                            nt = Math.floor(ai / f),
                            tt = Math.floor(vi / o),
                            ei = this._tilePyramid.getWrapping();
                        if (ei.horizontal || (d = Math.max(d, 0), nt = Math.min(nt, this._tileCount - 1)), ei.vertical || (g = Math.max(g, 0), tt = Math.min(tt, this._tileCount - 1)), this._cleanupTiles(d, g, nt, tt), it = 0, y = (tt + 1 - g) * (nt + 1 - d), !(y > i._maxTileProcessingLimit)) {
                            for (k && !s && y > i._maxBackgroundTileProcessingLimit && this.zoom !== this._tilePyramid.defaultBackgroundGridLevel && (r = !1), ft = !1, rt = 0, w = d; w <= nt; w++)
                                for (b = g; b <= tt; b++) {
                                    var oi = e.mod(w, this._tileCount),
                                        si = e.mod(b, this._tileCount),
                                        u = this.getTile(oi, si, r);
                                    r && u && (this.getIsActive() || this.getIsBackground()) && !u.getEnabled() && (u.dispatchStatus === 0 || u.dispatchStatus === 2) ? (hi = function(t, i, r, u) {
                                        return function() {
                                            if (i) {
                                                var e = i.tileId.quadKey,
                                                    s = i.getSize();
                                                s && s.width === f && s.height === o || i.setSize(new v(f, o));
                                                (r || u) && (n.groupCollapsed(null, "Setting tile enabled: {0}", e), i.setEnabled(!0), n.groupEnd());
                                                t._currentTileChangedHandlers[e] || (t._currentTileChangedHandlers[e] = i.changed.add(function(n) {
                                                    return t._onTileChanged(n)
                                                }));
                                                i.isGood() && (rt++, ni._percentGood = rt / y);
                                                it += i.getPercentLoaded();
                                                t.setPercentLoaded(it / y)
                                            }
                                        }
                                    }(this, u, s, k, oi, si, w, b), this._workDispatcher.dispatch(hi, this._getTileCacheKey(u.tileId), 1), u.dispatchStatus = 1, s && (this._pendingTiles[u.tileId.quadKey] = u)) : u && u.dispatchStatus === 3 && (p = u.tileId.quadKey, et = u.getSize(), et && et.width === f && et.height === o || u.setSize(new v(f, o)), s && (this._pendingTiles[p] && delete this._pendingTiles[p], this._currentTiles[p] = u, n.groupCollapsed(null, "Setting tile enabled: {0}", p), u.setEnabled(!0), n.groupEnd(), this._currentTileChangedHandlers[p] || (this._currentTileChangedHandlers[p] = u.changed.add(function(n) {
                                        return ni._onTileChanged(n)
                                    }))), !u.isGood() && (u.isDirty() || r) || (!ft && t && (ft = !0, t.beginGrid(this, this.getOpacity() * this._tilePyramid.getOpacity(), ut)), t && t.placeTile(u, w * f - ct, b * o - lt, f, o), rt++), it += u.getPercentLoaded())
                                }
                            ft && t && t.endGrid();
                            gt = it / y;
                            this._percentGood = rt / y;
                            this.setPercentLoaded(gt);
                            t && gt === 1 && ((s || k) && this._resetPendingTiles(), this._currentFrame && s && !this._hasRenderedCurrentFrame && (this._hasRenderedCurrentFrame = !0, this.onFrameRendered.invoke({
                                frame: this._currentFrame
                            })));
                            n.timeEnd("Grid Render");
                            n.groupEnd()
                        }
                    }
                }, i.prototype.dispose = function() {
                    var i,
                        r,
                        n;
                    t.prototype.dispose.call(this);
                    for (n in this._currentTiles)
                        this._currentTiles.hasOwnProperty(n) && (i = this._currentTileChangedHandlers[n], i && (i.dispose(), this._currentTileChangedHandlers[n] = null), r = this._currentTiles[n], r && r.dispose(), delete this._currentTiles[n]);
                    for (n in this._pendingTiles)
                        this._pendingTiles.hasOwnProperty(n) && (i = this._currentTileChangedHandlers[n], i && (i.dispose(), this._currentTileChangedHandlers[n] = null), r = this._pendingTiles[n], r && r.dispose(), delete this._pendingTiles[n])
                }, i.prototype.resetTiles = function() {
                    this._resetPendingTiles();
                    this._resetCurrentTiles()
                }, i.prototype._cleanupTiles = function(n, t, i, r) {
                    var s,
                        h,
                        u,
                        f,
                        o;
                    if (!(i - n > this._tileCount)) {
                        s = e.mod(n, this._tileCount);
                        h = e.mod(i, this._tileCount);
                        for (u in this._currentTiles)
                            this._currentTiles.hasOwnProperty(u) && (f = this._currentTiles[u], o = this._disableTilesOutsideBounds(f, s, h, t, r), o && delete this._currentTiles[u]);
                        for (u in this._pendingTiles)
                            this._pendingTiles.hasOwnProperty(u) && (f = this._pendingTiles[u], o = this._disableTilesOutsideBounds(f, s, h, t, r), o && delete this._pendingTiles[u])
                    }
                }, i.prototype._disableTilesOutsideBounds = function(n, t, i, r, u) {
                    var e = n.tileId,
                        o = !1,
                        f = e.x,
                        s;
                    return s = t < i ? f < t || f > i : !(t <= f && f <= this._tileCount || 0 <= f && f <= i), (s || e.y < r || e.y > u) && (n.dispatchStatus !== 3 && (n.dispatchStatus = 2), this._disableTile(n), o = !0), o
                }, i.prototype._disableTile = function(t) {
                    var i = t.tileId,
                        r;
                    n.groupCollapsed(null, "Cleaning up tile with tileId - {0} zoom: {1}, since its no longer in bounds", t.tileId.quadKey, i.zoom.toString());
                    t.setEnabled(!1);
                    this._workDispatcher.cancelDispatchWithKey(this._getTileCacheKey(t.tileId), 1);
                    this._tileFlickerFix && t.dispatchStatus === 1 && (t.dispatchStatus = 0);
                    r = this._currentTileChangedHandlers[i.quadKey];
                    r && (r.dispose(), delete this._currentTileChangedHandlers[i.quadKey]);
                    n.groupEnd()
                }, i.prototype._onIsActiveChanged = function(n, t) {
                    t || this.resetTiles()
                }, i.prototype._invokeFrameFailedEvent = function() {
                    this.onFrameFailed.invoke({
                        frame: this._currentFrame,
                        layer: null,
                        reason: 2,
                        errorMessage: null
                    });
                    this._hasRenderedCurrentFrame = !0
                }, i.prototype._onPercentLoadedChanged = function(n, t) {
                    t === 1 && this._percentGood < g.minQualityBar && this.getIsActive() && !this._hasRenderedCurrentFrame && (this._currentFrame ? this._invokeFrameFailedEvent() : this._invokeFrameFailedEventWhenFrameAvailable = !0)
                }, i.prototype._resetPendingTiles = function() {
                    var i = this._pendingTiles,
                        t,
                        n;
                    for (t in i)
                        this._pendingTiles.hasOwnProperty(t) && (n = this._pendingTiles[t], this._disableTile(n), n.dispatchStatus !== 3 && (n.dispatchStatus = 0));
                    this._pendingTiles = {}
                }, i.prototype._resetCurrentTiles = function() {
                    var i = this._currentTiles,
                        n,
                        t;
                    for (n in i)
                        this._currentTiles.hasOwnProperty(n) && (t = this._currentTiles[n], this._disableTile(t));
                    this._currentTiles = {}
                }, i.prototype._onTileChanged = function(n) {
                    n.name === "percentLoaded" && this._updatePercentLoaded()
                }, i.prototype._updatePercentLoaded = function() {
                    var r = 0,
                        i = 0,
                        u = 0,
                        n,
                        t;
                    for (n in this._pendingTiles)
                        this._pendingTiles.hasOwnProperty(n) && (t = this._pendingTiles[n], i++, r += t.getPercentLoaded(), t.isGood() && u++);
                    for (n in this._currentTiles)
                        this._currentTiles.hasOwnProperty(n) && (t = this._currentTiles[n], i++, r += t.getPercentLoaded(), t.isGood() && u++);
                    this._percentGood = u / i;
                    this.setPercentLoaded(r / i)
                }, i.prototype.getTile = function(t, r, u) {
                    var s,
                        e,
                        o,
                        f;
                    return (n.groupCollapsed(null, "Get tile {0}-{1}", t.toString(), r.toString()), s = t + "," + r, o = this._pyramidTileIdCache.getItem(s), o && this._tilePyramid.getCrs() === o.crs && (e = o), e || (e = new h(t, r, this._appliedZoom, this._tilePyramid.getTileWidth(), this._tilePyramid.getTileHeight(), this._tilePyramid.getCrs()), this._pyramidTileIdCache.addItem(s, e)), f = this._tilePyramid.getTileCache().getTile(e), f || (f = i._backgroundTileCache.getItem(this._getTileCacheKey(e))), f || (f = this._pendingTiles[e.quadKey], this.getIsActive() && (f || (f = this._currentTiles[e.quadKey], f && e === f.tileId && this._tilePyramid.getTileCache().addTile(f)))), f && f.isDirty() && f.update(), f || !u) ? (n.log(null, "Cache hit"), n.groupEnd(), f && f.setIsBackground(!this.getIsActive() && this.getIsBackground()), f) : (n.log(null, "Cache miss"), e.quadKey) ? (n.log(null, "Preparing tile for quadKey: {0}", e.quadKey), f = this._createTile(e), n.groupEnd(), f) : (n.groupEnd(), null)
                }, i.prototype._createTile = function(n) {
                    var t = this._tilePyramid.getTileFactory()({
                        tileId: n
                    });
                    return !this.getIsActive() && this.getIsBackground() ? i._backgroundTileCache.addItem(this._getTileCacheKey(t.tileId), t) : this._tilePyramid.getTileCache().addTile(t), t.dispatchStatus = 0, t.setIsBackground(!this.getIsActive() && this.getIsBackground()), t
                }, i.prototype._getTileCacheKey = function(n) {
                    var t = n.quadKey,
                        i = n.crs,
                        r;
                    return t += "-" + i.id, i.version && (t += "-" + i.version), r = this._tilePyramid.getMap(), r.getAllLayers().hasUserLayers() && (t += "-" + r.getId()), t
                }, i._backgroundCacheSize = 64, i._backgroundGridViewportExpansionFactor = 2, i._defaultBackgroundGridViewportExpansionFactor = 8, i._maxTileProcessingLimit = 512, i._maxBackgroundTileProcessingLimit = 16, i._tileSize = 65536, i
            }(a),
            pt = function(t) {
                function i(n, i, r, u, f, e) {
                    var o = this,
                        s = {},
                        h;
                    return o = t.call(this, s) || this, o._layerData = [], o._map = u, o._workDispatcher = f, o._renderQueued = !1, o._drawingContext = i, o._hitTestingDrawingContext = r, o._layerCollection = n, o._layerCollectionRevision = -1, o._tileRevisionNumber = 0, o._generalizedCoordinatesCount = 0, o._totalCoordinatesCount = 0, o.tileId = e, o._tileFlickerFix = u.getConfig().tileFlickerFix, h = u.getMapOptions().labelOptions, o._scrimColor = h.testRenderStyles && h.scrimColor, o._hitTestingData = null, s.defineProperty("size", function(n, t) {
                        return o._onSizeChanged(n, t)
                    }), s.defineProperty("percentLoaded", null, null, {
                        defaultValue: 0
                    }), s.defineProperty("enabled", function(n, t) {
                        return o._onEnabledChanged(n, t)
                    }), s.defineProperty("isBackground", function(n, t) {
                        return o._onIsBackgroundChanged(n, t)
                    }, null, {
                        defaultValue: !1
                    }), o._hitTestingDrawingContext.setSize(e.pixelWidth, e.pixelHeight), o._drawingContext.setSize(e.pixelWidth, e.pixelHeight), o._layerChangedHandlers = [], o
                }
                return y(i, t), i.prototype.isGood = function() {
                    var t;
                    if (this._isDirty)
                        return !1;
                    for (var n = 0, i = 0, r = this._layerData.length; n < r; n++)
                        if (t = this._layerData[n], t.hasError && (i++, t.layer.isCritical))
                            return !1;
                    return i < r
                }, i.prototype.isDirty = function() {
                    return this._isDirty
                }, i.prototype.getMap = function() {
                    return this._map
                }, i.prototype.clear = function() {
                    this._drawingContext.clear()
                }, i.prototype._onIsBackgroundChanged = function() {
                    this.getEnabled() && (this._updateLayerData(), this.invalidateRender())
                }, i.prototype._onEnabledChanged = function(t, i) {
                    var u = this,
                        r,
                        f;
                    if (n.logObject(null, "Tile enabled changed, oldEnabled", t), n.logObject(null, "Tile enabled changed, newEnabled", i), i)
                        n.log(null, "Updating all layers"), this.update(), this._layerCollectionChangedHandler = this._layerCollection.changed.add(function(n) {
                            return u._handleLayerChange(n.added, n.removed, null, n.reset)
                        }), this._layerChangedHandler = this._layerCollection.layerChanged.add(function(n) {
                            return u._handleLayerChange(null, null, n)
                        });
                    else {
                        for (this._layerCollectionChangedHandler && this._layerCollectionChangedHandler.dispose(), this._layerChangedHandler && this._layerChangedHandler.dispose(), r = 0, f = this._layerData.length; r < f; r++)
                            this._layerData[r].setEnabled(!1);
                        this._layerChangedHandlers.forEach(function(n) {
                            n.dispose()
                        });
                        this._layerChangedHandlers = [];
                        this._hitTestingData = null;
                        this._cancelPendingRenderDispatch()
                    }
                }, i.prototype._cancelPendingRenderDispatch = function() {
                    this._tileFlickerFix ? this._renderQueued && (this._renderQueued = !1, this._isDirty = !0, this._workDispatcher.cancelDispatchWithKey(this.tileId.toString() + "-" + this._map.getId(), 2)) : (this._renderQueued = !1, this._workDispatcher.cancelDispatchWithKey(this.tileId.toString() + "-" + this._map.getId(), 2))
                }, i.prototype._handleLayerChange = function(n, t, i, r) {
                    r === void 0 && (r = !1);
                    this._isDirty = this._isDirty || r || n && n.length > 0 || t && t.length > 0 || !this._layerIds || !!i
                }, i.prototype._isLayerPresent = function(n) {
                    if (n)
                        for (var t = 0; t < n.length; t++)
                            if (n[t] && this._layerIds[n[t].getId()])
                                return !0;
                    return !1
                }, i.prototype.hitTest = function(n, t, i) {
                    this.renderedPrimitivesCount > 0 && (this._hitTestingData || this._renderHitTestData(), this._hitTestingData.setResultToArgs(n, t, i))
                }, i.prototype.invalidateRender = function() {
                    var n = this;
                    this._map.isDisposed() || !this._renderQueued && this._hasAllBaseMapData() && (this._renderQueued = !0, this._workDispatcher.dispatch(function() {
                        return n._render()
                    }, this.tileId.toString() + "-" + this._map.getId(), 2))
                }, i.prototype._hasAllBaseMapData = function() {
                    var r = this._map.getBaseLayers(),
                        t;
                    if (!r || !this._layerData)
                        return !1;
                    for (t = 0; t < this._layerData.length; t++) {
                        var n = this._layerData[t],
                            i = n.layer,
                            u = r.indexOf(i) !== -1;
                        if (u && i.getVisible() && i.getRenderTarget() === 0)
                            if (i instanceof ot) {
                                if (n.scene && !n.rasterImage && !n.hasError)
                                    return !1
                            } else if (!(n.drawOrderList && n.indexedPrimitives) && !(n.templates && n.templatePrimitives))
                                return !1
                    }
                    return !0
                }, i.prototype._updateLayerData = function() {
                    var o = this,
                        i = this._layerCollection,
                        n,
                        f,
                        r;
                    for (u._clearDisposables(this._layerData), u._clearDisposables(this._layerChangedHandlers), this._layerCollectionRevision = i.revision, this._hasImageLayer = !1, n = 0, f = i.length; n < f; n++) {
                        var t = i[n],
                            e = this._map.getBaseLayers(),
                            s = e && e.indexOf(t) !== -1;
                        !0 && (this._layerChangedHandlers.push(t.changed.add(function(n) {
                            (n.name === "visible" || n.name === "renderTarget") && o._handleLayerChange(null, null, n.sender)
                        })), t.getVisible() && (r = new wt(t, s, this), u._orderedInsert(this._layerData, r, "zIndex"), r.scene && (this._hasImageLayer = !0)))
                    }
                }, i.prototype.update = function() {
                    if (n.groupCollapsed(null, "Update all layer data"), this._layerCollectionRevision !== this._layerCollection.revision)
                        this._updateLayerData();
                    else
                        for (var t = 0, i = this._layerData.length; t < i; t++)
                            this._layerData[t].setEnabled(!0);
                    this._isDirty = !1;
                    n.groupEnd()
                }, i.prototype.dispose = function() {
                    this.setEnabled(!1);
                    u._clearDisposables(this._layerData);
                    this._isDirty = !0;
                    this._layerCollectionRevision = -1
                }, i.prototype._onSizeChanged = function(n, t) {
                    this.getRootElement().set_style(t)
                }, i.prototype._render = function() {
                    var u,
                        i,
                        r,
                        t;
                    if (n.groupCollapsed(null, "Rendering vector tile with zoom: {0} quadKey: {1}", this.tileId.zoom.toString(), this.tileId.quadKey), n.time("Render time"), u = Date.now(), this._displayTileBoundary = this._map.getDisplayTileBoundaries && this._map.getDisplayTileBoundaries(), this._tileRevisionNumber++, i = this._map._stats_vectorTile, i && i.begin(), this._renderQueued = !1, !this._hasAllBaseMapData()) {
                        n.groupEnd();
                        return
                    }
                    this.getPercentLoaded() === 1 && this.setPercentLoaded(.99);
                    this.setPercentLoaded(1);
                    r = undefined;
                    this._hasImageLayer || (t = this._layerData[0] && this._layerData[0] instanceof k && this._layerData[0].layer, r = "#FFFFFF", t && t.getTemplateSelector && t.getTemplateSelector() && t.getTemplateSelector().getLandColor && (r = t.getTemplateSelector().getLandColor()));
                    this._drawingContext.clear(r);
                    this._renderContents(this._drawingContext);
                    this._renderHitTestingContents() || (this._hitTestingData = null);
                    this.dispatchStatus = 3;
                    i && i.end();
                    n.timeEnd("Render time");
                    n.groupEnd()
                }, i.prototype._renderHitTestData = function() {
                    this._hitTestingDrawingContext.setSize(this.tileId.pixelWidth, this.tileId.pixelHeight);
                    this._hitTestingDrawingContext.clear();
                    this._renderContents(this._hitTestingDrawingContext);
                    this._hitTestingData = this._hitTestingDrawingContext.getHitTestingData()
                }, i.prototype._renderHitTestingContents = function() {
                    if (this._map.getIsMapHitTestable() && this.renderedPrimitivesCount > 0) {
                        this._renderHitTestData();
                        var n = new Image;
                        return n.src = this._hitTestingDrawingContext.getDataURL(), this._drawingContext.save(), this._drawingContext.setGlobalAlpha(.3), this._drawingContext.drawImage(n, 0, 0, null, null, this._drawingContext.getGlobalAlpha()), this._drawingContext.restore(), !0
                    }
                    return !1
                }, i.prototype._renderContents = function(t) {
                    var r = !1,
                        p = this._map.getDpiScale(),
                        w = !!this._scrimColor,
                        s,
                        b,
                        e,
                        k,
                        f,
                        d,
                        u,
                        l,
                        y,
                        g,
                        o,
                        a,
                        v;
                    for (t === this._drawingContext && (this.renderedPrimitivesCount = 0, this._totalCoordinatesCount = 0, this._generalizedCoordinatesCount = 0, r = !0, this._layerIds = {}), s = 0; s < this._layerData.length; s++) {
                        var i = this._layerData[s],
                            h = i.layer,
                            c = !1;
                        if (h && h.getVisible())
                            if (w && !i.isBaseLayer && (t.clear(this._scrimColor), w = !1), t.setLayer(h), b = i.rasterImage && i.rasterImage.image, b && !i.hasError && r)
                                this._drawingContext.save(), this._drawingContext.setGlobalAlpha(i.opacity), this._drawTile(i), this._drawingContext.restore(), c = !0;
                            else if (i.drawOrderList && i.indexedPrimitives)
                                for (e = i.drawOrderList, k = i.indexedPrimitives, f = 0; f < e.keys.length; f++)
                                    d = e.keys[f], u = k[d], u && (l = e.templates[f], (r || l.getIsHitTestable()) && (u = this._getVisiblePrimitives(u, e.visibilities[f], this.tileId.zoom), u && u.length > 0 && (r && (this.renderedPrimitivesCount += u.length, c = !0), l.renderGroup(t, u, this.tileId, p, n.TileLogTag), (this._displayTileBoundary || n.enableFunctionalTestHooks) && this._updateLoggingGroupPrimitiveData(r, u, l))));
                            else if (i.templates && i.templatePrimitives)
                                for (y = i.templates, g = i.templatePrimitives, o = 0; o < y.length; o++)
                                    a = y[o], v = g[o], (r || a.getIsHitTestable()) && (r && (this.renderedPrimitivesCount++, c = !0), t.setPrimitive(v), a.render(t, v, this.tileId, p, n.TileLogTag), (this._displayTileBoundary || n.enableFunctionalTestHooks) && this._updateLoggingPrimitiveData(r, v, a));
                        c && (this._layerIds[h.getId()] = !0)
                    }
                    r && n.logTileRendering(this, this._tileRevisionNumber, this._generalizedCoordinatesCount, this._totalCoordinatesCount);
                    t.flush()
                }, i.prototype._drawTile = function(n) {
                    var t = n.tileId,
                        i = n.rasterTileId,
                        f = n.scene,
                        r = n.rasterImage && n.rasterImage.image,
                        e,
                        o,
                        s;
                    if (f && t && (typeof t.imageryWidth == "number" || typeof t.imageryHeight == "number"))
                        e = f.getSecondaryTile && f.getSecondaryTile(), e ? (o = t.imageryWidth || t.pixelWidth, s = t.imageryHeight || t.pixelHeight, this._drawingContext.drawImage(e, 0, 0), this._drawingContext.drawImage(r, 0, 0, o, s, null, 0, 0, o, s)) : this._drawingContext.drawImage(r, 0, 0);
                    else if (t && i && !h.areEqual(t, i)) {
                        var u = Math.pow(2, t.zoom - i.zoom),
                            c = i.pixelWidth,
                            l = i.pixelHeight,
                            a = u * c,
                            v = u * l,
                            y = (i.x * u - t.x) * c,
                            p = (i.y * u - t.y) * l;
                        this._drawingContext.drawImage(r, y, p, a, v)
                    } else
                        this._drawingContext.drawImage(r, 0, 0)
                }, i.prototype._getVisiblePrimitives = function(n, t, i) {
                    for (var e, r, u, o = [], f = 0; f < n.length; f++)
                        if (e = !1, r = n[f], t.geometryType === r.geometryType) {
                            for (u = 0; u < t.drawingStyleVisibilities[r.geometryType].length; u++)
                                i >= t.drawingStyleVisibilities[r.geometryType][u].zoom && (e = t.drawingStyleVisibilities[r.geometryType][u].visible);
                            e && o.push(r)
                        }
                    return o
                }, i.prototype._updateLoggingPrimitiveData = function(n, t, i) {
                    var r,
                        f,
                        e,
                        u,
                        o;
                    if (n && t && i instanceof ct)
                        if (t.geometryType === 2)
                            f = t.geometry, r = d.instance.getGeneralizations(f, this.tileId.zoom), this._totalCoordinatesCount += f.x.length, r && (this._generalizedCoordinatesCount += r.length);
                        else if (t.geometryType === 3)
                            for (e = t.geometry, u = 0; u < e.rings.length; u++)
                                o = e.rings[u], r = d.instance.getGeneralizations(o, this.tileId.zoom), this._totalCoordinatesCount += o.x.length, r && (this._generalizedCoordinatesCount += r.length)
                }, i.prototype._updateLoggingGroupPrimitiveData = function(n, t, i) {
                    if (n)
                        for (var r = 0; r < t.length; r++)
                            this._updateLoggingPrimitiveData(n, t[r], i)
                }, i.prototype._displayTileBoundaries = function() {}, i.prototype.getRootElement = function() {
                    return this._drawingContext.getRootElement()
                }, i
            }(a),
            wt = function() {
                function t(n, t, i) {
                    this.tile = i;
                    this.tileId = i.tileId;
                    this._layerChangeHandler = null;
                    this._templateSelector = null;
                    this._templateChangeHandler = null;
                    this._layerRevision = -1;
                    this._enabled = !1;
                    this.layer = n;
                    this.isBaseLayer = t;
                    this.zIndex = ~~n.getZIndex();
                    this.opacity = n.getOpacity();
                    this.rasterImage = null;
                    this.scene = null;
                    this.primitives = null;
                    this.templates = null;
                    this.templatePrimitives = null;
                    this.indexedPrimitives = null;
                    this.drawOrderList = null;
                    this._entityChangeHandlers = [];
                    this.setEnabled(!0)
                }
                return t.prototype.getEnabled = function() {
                    return this._enabled
                }, t.prototype._isDirty = function() {
                    return this._layerRevision !== this.layer.revision || this._dataVersion !== this.layer.dataVersion
                }, t.prototype._clearDirty = function() {
                    this._layerRevision = this.layer.revision;
                    this._dataVersion = this.layer.dataVersion
                }, t.prototype.setEnabled = function(t) {
                    var r,
                        i,
                        u;
                    n.log(null, "Is there something to do? _enabled: {0}, value: {1}", this._enabled.toString(), t.toString());
                    this._enabled !== t && (this._enabled = t, t ? (this._isDirty() && (this._clearDirty(), this._clearData()), r = this.layer, i = r.data.indexOf(this), i === -1 && r.data.push(this), r.feed(this), this._cleanupEntityChangedHandler(), this._initializePrimitives()) : (n.log(null, "cancelPrimitivesRequest - {0}", this.tileId.quadKey), this.layer instanceof k && this.layer.cancelRequestForPrimitives && this.layer.cancelRequestForPrimitives(this), this._cleanupEntityChangedHandler(), i = this.layer && this.layer.data ? this.layer.data.indexOf(this) : -1, i !== -1 && (u = this.layer.data.splice(i, 1), u && u.length > 0 && u[0]._clearData()), this._layerChangeHandler && (this._layerChangeHandler.dispose(), this._layerChangeHandler = null), this._templateChangeHandler && (this._templateChangeHandler.dispose(), this._templateChangeHandler = null), this.requestId && ht.abortRequest(this.requestId)))
                }, t.prototype.setTemplateSelector = function(n) {
                    this._templateSelector !== n && (this._templateChangeHandler && (this._templateChangeHandler.dispose(), this._templateChangeHandler = null), this._templateSelector = n, this._updateTemplates())
                }, t.prototype.onPrimitivesAvailable = function(t) {
                    if (!this._enabled) {
                        n.groupCollapsed(null, "Ignoring callback for tileid - {0}", this.tileId.quadKey);
                        n.groupEnd();
                        return
                    }
                    n.groupCollapsed(null, "Processing callback for tileid - {0} - {1}", this.tileId.quadKey, this.layer.getId());
                    this._cleanupEntityChangedHandler();
                    this.primitives = t && t.primitives;
                    this._initializePrimitives();
                    this._updateTemplates();
                    n.groupEnd()
                }, t.prototype.dispose = function() {
                    (this.layer || this.tile) && (this.setEnabled(!1), this._clearData(), u._clearDisposables(this.primitives), this.clearRasterImage(), this.layer = null, this.tile = null)
                }, t.prototype._clearData = function() {
                    this.primitives = null;
                    this.templates = null;
                    this.templatePrimitives = null;
                    this.indexedPrimitives = null;
                    this.indexedLabelsPrimitives = null;
                    this.scene = null;
                    this.clearRasterImage()
                }, t.prototype.clearRasterImage = function() {
                    this.rasterImage && (this.rasterImage.release(), this.rasterImage = null, this.rasterTileId = null)
                }, t.prototype._initializePrimitives = function() {
                    var e = this,
                        r = this.primitives,
                        u,
                        t,
                        f,
                        n,
                        i;
                    if (r)
                        for (u = this.layer.getRenderTarget(), t = 0, f = r.length; t < f; t++)
                            n = r[t], (u === 0 || n.geometryType === 2 || n.geometryType === 3) && (i = n.entity, i && i.changed && this._entityChangeHandlers.push(i.changed.add(function(n) {
                                return e._onEntityChanged(n)
                            }))), n.layer = this.layer
                }, t.prototype._cleanupEntityChangedHandler = function() {
                    u._clearDisposables(this._entityChangeHandlers)
                }, t.prototype._onEntityChanged = function() {
                    this._updateTemplates()
                }, t.prototype._updateTemplates = function() {
                    var t = this,
                        i = this._templateSelector;
                    this.layer.getVisible() && i && i.selectorReady().then(function() {
                        var s = t.tileId.crs.getScale(t.tileId),
                            h = !1,
                            f,
                            c,
                            r,
                            e,
                            o,
                            l,
                            u;
                        if (t.primitives) {
                            if (i.processDrawOrder && i.getDrawOrderList && i.indexPrimitives)
                                t.indexedPrimitives = i.indexPrimitives(t.primitives, t.tileId, s), t.drawOrderList = i.getDrawOrderList(s), h = !0;
                            else {
                                var a = t.templates = [],
                                    v = t.templatePrimitives = [],
                                    y = t.layer.getRenderTarget();
                                if (t.primitives)
                                    for (f = 0, c = t.primitives.length; f < c; f++)
                                        if ((r = t.primitives[f], y !== 1 || r.geometryType !== 1) && (e = i.getTemplates(r, s), e))
                                            for (o = 0, l = e.length; o < l; o++)
                                                u = e[o], u && u.isInBounds(r, t.tileId) && (n.assert(u.getZIndex === undefined, "mapcontrol doesn't support ordering the templates based on the zindex"), a.push(u), v.push(r), h = !0)
                            }
                            (h || t.tile.renderedPrimitivesCount > 0) && t.tile.invalidateRender()
                        }
                    })
                }, t
            }();
        t.CanvasTilePlacement = at;
        t.HtmlTilePlacement = vt;
        i.PyramidTileId = h;
        i.TileCache = ft;
        i.TilePyramid = g;
        t.VectorTile = pt;
        t.PyramidTileSpatialIndex = tt;
        t.SheetId = p;
        t.SheetCrs = ut;
        t.SheetSpatialIndex = yt;
        t.TileSystemHelper = r;
        t.RasterTileCache = typeof rt != "undefined" ? rt : null;
        t.RasterTile = typeof it != "undefined" ? it : null
    } catch (et) {
        if (i.logger)
            i.logger.logCriticalError(et);
        else
            throw et;
    }
}).call(window)
