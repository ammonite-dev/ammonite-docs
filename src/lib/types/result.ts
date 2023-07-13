export type Result<T, E> =
	| {
			ok: true;
			val: T;
	  }
	| {
			ok: false;
			val: E;
	  };

export type Option<T> =
	| {
			some: true;
			val: T;
	  }
	| {
			some: false;
	  };
