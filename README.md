<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Cumulative Distribution Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> [Bernoulli][bernoulli-distribution] distribution [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [Bernoulli][bernoulli-distribution] random variable is

<!-- <equation class="equation" label="eq:bernoulli_cdf" align="center" raw="F(x;p)= \begin{cases} 0 & \text{ for } x < 0 \\ 1-p & \text{ for } 0 \le x < 1  \\ 1 & \text{ for } x \ge 1 \end{cases}" alt="Cumulative distribution function for a Bernoulli distribution."> -->

<div class="equation" align="center" data-raw-text="F(x;p)= \begin{cases} 0 &amp; \text{ for } x &lt; 0 \\ 1-p &amp; \text{ for } 0 \le x &lt; 1  \\ 1 &amp; \text{ for } x \ge 1 \end{cases}" data-equation="eq:bernoulli_cdf">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/stats/base/dists/bernoulli/cdf/docs/img/equation_bernoulli_cdf.svg" alt="Cumulative distribution function for a Bernoulli distribution.">
    <br>
</div>

<!-- </equation> -->

where `0 <= p <= 1` is the success probability.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-bernoulli-cdf
```

</section>

<section class="usage">

## Usage

```javascript
var cdf = require( '@stdlib/stats-base-dists-bernoulli-cdf' );
```

#### cdf( x, p )

Evaluates the [cumulative distribution function][cdf] for a [Bernoulli][bernoulli-distribution] distribution with success probability `p`.

```javascript
var y = cdf( 1.0, 0.5 );
// returns 1.0

y = cdf( 0.5, 0.5 );
// returns 0.5
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = cdf( NaN, 0.5 );
// returns NaN

y = cdf( 0.0, NaN );
// returns NaN
```

If provided a success probability `p` outside of `[0,1]`, the function returns `NaN`.

```javascript
var y = cdf( 0.9, -1.0 );
// returns NaN

y = cdf( 0.9, 1.5 );
// returns NaN
```

#### cdf.factory( p )

Returns a function for evaluating the [cumulative distribution function][cdf] of a [Bernoulli][bernoulli-distribution] distribution with success probability `p`

```javascript
var mycdf = cdf.factory( 0.5 );
var y = mycdf( 0.5 );
// returns 0.5

y = mycdf( 2.0 );
// returns 1.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var cdf = require( '@stdlib/stats-base-dists-bernoulli-cdf' );

var p;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 5.0;
    p = randu();
    y = cdf( x, p );
    console.log( 'x: %d, p: %d, F(x;p): %d', x.toFixed( 4 ), p.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-bernoulli-cdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-bernoulli-cdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-bernoulli-cdf/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-base-dists-bernoulli-cdf/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-bernoulli-cdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-bernoulli-cdf?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-bernoulli-cdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-bernoulli-cdf/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-bernoulli-cdf/main/LICENSE

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[bernoulli-distribution]: https://en.wikipedia.org/wiki/Bernoulli_distribution

</section>

<!-- /.links -->
