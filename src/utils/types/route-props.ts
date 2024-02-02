export type RouteProps<P> = {
  params: P;
  searchParams: { [key: string]: string | string[] | undefined };
};
